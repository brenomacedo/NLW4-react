import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar = () => {

    const { currentExperience, experienceNextLevel } = useContext(ChallangesContext)

    const percentToNextLevel = currentExperience/experienceNextLevel*100

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%`, transition: '0.5s' }}></div>
                <span className={styles.currentExperience}
                style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceNextLevel} xp</span>
        </header>
    )
}

export default ExperienceBar