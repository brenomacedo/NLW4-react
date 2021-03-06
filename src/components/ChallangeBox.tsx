import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallangeBox.module.css'

export default function ChallangeBox() {

    const { activeChallange, resetChallange, completeChallange } = useContext(ChallangesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function succeededChallange() {
        completeChallange()
        resetCountdown()
    }

    function failedChallange() {
        resetChallange()
        resetCountdown()
    }

    return (
        <div className={styles.container}>
            {activeChallange ? (
                <div className={styles.challangeActive}>
                    <header>Ganhe {activeChallange.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallange.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallange.description}</p>
                    </main>
                    <footer>
                        <button type="button"  onClick={failedChallange}
                        className={styles.challangeFailButton}>Falhei</button>
                        <button type="button" onClick={succeededChallange}
                        className={styles.challangeSucceededButton}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challangeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando os desafios
                    </p>
                </div>
            )}
        </div>
    )
}