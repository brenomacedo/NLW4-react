import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'
import { FaCheckCircle, FaClock, FaTimes } from 'react-icons/fa'
import { CountdownContext } from '../contexts/CountdownContext'

export default function Countdown() {

    const { minutes, seconds, hasFinished, isActive,
        resetCountdown, startCountdown } = useContext(CountdownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


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
                    <button type="button" onClick={resetCountdown}
                    className={`${styles.start} ${styles.active} ${styles.buttonContainer}`}>
                        <div className={styles.progress} style={{ width: `${100 - ((minutes*60 + seconds)*100 / 25*60)}%` }}></div>
                        <div className={`${styles.buttonAbove} ${styles.BAStop}`}>
                            Abandonar ciclo <FaTimes color='#e83f5b' size={20} style={{ marginLeft: 10 }} />
                        </div>
                    </button>
                ) : (
                    <button type="button" onClick={startCountdown}
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