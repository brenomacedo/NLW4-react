import { createContext, FC, useState } from 'react'

interface ChallangesContextData {
    level: number
    currentExperience: number
    challangesCompleted: number
    levelUp: () => void
    startNewChallange: () => void
}

const ChallangesContext = createContext<ChallangesContextData>({} as any)

const ChallangesProvider:FC = ({ children }) => {

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challangesCompleted, setChallangesCompleted] = useState(0)

    function startNewChallange() {
        console.log('New Challange')
    }

    function levelUp() {
        console.log('levelup')
    }

    return (
        <ChallangesContext.Provider value={{ level, currentExperience, challangesCompleted,
        startNewChallange, levelUp }}>
            {children}
        </ChallangesContext.Provider>
    )
}

export default ChallangesProvider