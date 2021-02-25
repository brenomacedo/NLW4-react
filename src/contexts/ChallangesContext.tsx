import { createContext, FC, useEffect, useState } from 'react'
import challanges from '../../challanges.json'

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
}

const ChallangesContext = createContext<ChallangesContextData>({} as any)

const ChallangesProvider:FC = ({ children }) => {

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challangesCompleted, setChallangesCompleted] = useState(0)

    const [activeChallange, setActiveChallange] = useState(null)

    const experienceNextLevel = Math.pow((level + 1)*4,2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

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

    function levelUp() {
        setLevel(level + 1)
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
        completeChallange }}>
            {children}
        </ChallangesContext.Provider>
    )
}

export { ChallangesContext }
export default ChallangesProvider