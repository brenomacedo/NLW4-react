import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'
import { FaCheckCircle, FaClock, FaTimes } from 'react-icons/fa'

let countdownTimeOut: NodeJS.Timeout

export default function Countdown() {

    const [time, setTime] = useState(0.05 * 60)
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
                        Ciclo encerrado <FaCheckCircle color='#4cd62b' size={20} style={{ marginLeft: 10 }} />
                    </div>
                </button>
            ) : (
                isActive ? (
                    <button type="button" onClick={resetCountDown}
                    className={`${styles.start} ${styles.active} ${styles.buttonContainer}`}>
                        <div className={`${styles.buttonAbove} ${styles.BAStop}`}>
                            Abandonar ciclo <FaTimes color='#e83f5b' size={20} style={{ marginLeft: 10 }} />
                        </div>
                    </button>
                ) : (
                    <button type="button" onClick={startCountDown}
                    className={`${styles.start} ${styles.buttonContainer}`}>
                        <div className={`${styles.buttonAbove} ${styles.BAStart}`}>
                            Iniciar um ciclo <FaClock color='white' size={20} style={{ marginLeft: 10 }} />
                        </div>
                    </button>
                )
            )}

            
        </div>
    )
}