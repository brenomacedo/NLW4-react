import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/CompletedChallanges.module.css'

export default function CompletedChallanges() {

    const { challangesCompleted } = useContext(ChallangesContext)

    return (
        <div className={styles.container}>
            <span>Desafios completos:</span>
            <span>{challangesCompleted}</span>
        </div>
    )
}