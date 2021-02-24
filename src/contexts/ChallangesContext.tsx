import { createContext, FC, useState } from 'react'
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
}

const ChallangesContext = createContext<ChallangesContextData>({} as any)

const ChallangesProvider:FC = ({ children }) => {

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challangesCompleted, setChallangesCompleted] = useState(0)

    const [activeChallange, setActiveChallange] = useState(null)

    const experienceNextLevel = Math.pow((level + 1)*4,2)

    function startNewChallange() {
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length)
        const challange = challanges[randomChallangeIndex]

        setActiveChallange(challange)
    }

    function levelUp() {
        console.log('levelup')
    }

    function resetChallange() {
        setActiveChallange(null)
    }

    return (
        <ChallangesContext.Provider value={{ level, currentExperience, challangesCompleted,
        startNewChallange, levelUp, activeChallange, resetChallange, experienceNextLevel }}>
            {children}
        </ChallangesContext.Provider>
    )
}

export { ChallangesContext }
export default ChallangesProvider