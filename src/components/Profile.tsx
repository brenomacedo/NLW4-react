import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/Profile.module.css'

export default function Profile() {
    
    const { level } = useContext(ChallangesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/brenomacedo.png" alt="breno"/>
            <div>
                <strong>Breno Macedo</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}