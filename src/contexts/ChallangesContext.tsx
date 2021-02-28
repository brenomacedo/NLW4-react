import { createContext, FC, useEffect, useState } from 'react'
import challanges from '../../challanges.json'
import CompletedChallanges from '../components/CompletedChallanges'
import LevelUpModal from '../components/LevelUpModal'
import api from '../services/api'

interface Challange {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallangesContextData {
    level: number
    currentExperience: number
    challangesCompleted: number
    levelUp: () => void
    startNewChallange: () => void
    activeChallange: Challange
    resetChallange: () => void
    experienceNextLevel: number
    completeChallange: () => void
    closeModal: () => void
}

interface ChallangesProviderData {
    initialLevel: number
    initialCurrentExperience: number
    initialChallangesCompleted: number
    sub: string
}

const ChallangesContext = createContext<ChallangesContextData>({} as any)

const ChallangesProvider:FC<ChallangesProviderData> = ({ children, initialLevel,
    initialCurrentExperience, initialChallangesCompleted, sub }) => {

    const [level, setLevel] = useState(initialLevel ?? 1)
    const [currentExperience, setCurrentExperience] = useState(initialCurrentExperience ?? 0)
    const [challangesCompleted, setChallangesCompleted] = useState(initialChallangesCompleted ?? 0)

    const [activeChallange, setActiveChallange] = useState(null)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const experienceNextLevel = Math.pow((level + 1)*4,2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {

        async function updateUser() {
            
            await api.put('api/user', {
                sub, level, currentExperience, challangesCompleted
            })

        }

        updateUser()

    }, [level, currentExperience, challangesCompleted])

    function startNewChallange() {
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length)
        const challange = challanges[randomChallangeIndex]

        setActiveChallange(challange)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio! 👏', {
                body: `Valendo: ${challange.amount} XP`
            })
        }
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    function levelUp() {
        setLevel(level + 1)
        setIsModalOpen(true)
    }

    function resetChallange() {
        setActiveChallange(null)
    }

    function completeChallange() {
        if(!activeChallange) {
            return
        }

        const { amount } = activeChallange

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceNextLevel) {
            finalExperience = finalExperience - experienceNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallange(null)
        setChallangesCompleted(challangesCompleted + 1)
    }

    return (
        <ChallangesContext.Provider value={{ level, currentExperience, challangesCompleted,
        startNewChallange, levelUp, activeChallange, resetChallange, experienceNextLevel,
        completeChallange, closeModal }}>
            {children}

            {isModalOpen && <LevelUpModal level={level} completedChallanges={challangesCompleted}
            currentExperience={currentExperience} />}
        </ChallangesContext.Provider>
    )
}

export { ChallangesContext }
export default ChallangesProvider