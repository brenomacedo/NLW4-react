import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeOut: NodeJS.Timeout

export default function Countdown() {

    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1)    
            }, 1000)
        } else if(isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountDown() {
        setIsActive(true)
    }

    function resetCountDown() {
        setIsActive(false)
        clearTimeout(countdownTimeOut)
        setTime(25 * 60)
    }

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <div>:</div>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={`${styles.start} ${styles.buttonContainer}`}>
                    <div className={`${styles.buttonAbove} ${styles.BAFinished}`}>
                        Ciclo encerrado
                    </div>
                </button>
            ) : (
                isActive ? (
                    <button type="button" onClick={resetCountDown}
                    className={`${styles.start} ${styles.active} ${styles.buttonContainer}`}>
                        <div className={`${styles.buttonAbove} ${styles.BAStop}`}>
                            Abandonar ciclo
                        </div>
                    </button>
                ) : (
                    <button type="button" onClick={startCountDown}
                    className={`${styles.start} ${styles.buttonContainer}`}>
                        <div className={`${styles.buttonAbove} ${styles.BAStart}`}>
                            Iniciar um ciclo
                        </div>
                    </button>
                )
            )}

            
        </div>
    )
}