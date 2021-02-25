import { createContext, FC, useContext, useEffect, useState } from 'react'
import { ChallangesContext } from './ChallangesContext'

interface CountdownContextData {
    minutes: number
    seconds: number
    resetCountdown: () => void
    startCountdown: () => void
    isActive: boolean
    hasFinished: boolean
}

let countdownTimeOut: NodeJS.Timeout

const CountdownContext = createContext<CountdownContextData>({} as any)

const CountdownProvider:FC = ({ children }) => {

    const { startNewChallange } = useContext(ChallangesContext)

    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0.05 * 60)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1)    
            }, 1000)
        } else if(isActive && time === 0) {
            setHasFinished(true)
            startNewChallange()
            setIsActive(false)
        }
    }, [isActive, time])

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        setIsActive(false)
        clearTimeout(countdownTimeOut)
        setTime(0.05 * 60)
        setHasFinished(false)
    }

    return (
        <CountdownContext.Provider value={{
            seconds, minutes, isActive, hasFinished, startCountdown, resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}

export { CountdownContext }
export default CountdownProvider