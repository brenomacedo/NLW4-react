import styles from '../styles/components/LeaderboardItem.module.css'

interface LeaderboardItemProps {
    name: string
    completedChallanges: number
    totalExperience: number
    level: number
    position: number
    image: string
}

export default function LeaderboardItem({ name, completedChallanges,
    totalExperience, level, position, image }: LeaderboardItemProps) {
    return (
        <div className={styles.container}>
            <div className={styles.level}>
                {position}
            </div>
            <div className={styles.user}>
                <div className={styles.userPicture}
                style={{ backgroundImage: `url('${image}')` }}></div>
                <div className={styles.userDescription}>
                    <p>{name}</p>
                    <span><img src="/icons/level.svg" alt=""/> Level {level}</span>
                </div>
            </div>
            <div className={styles.challanges}>
                <p><strong>{completedChallanges}</strong> completados</p>
            </div>
            <div className={styles.xp}>
            <p><strong>{totalExperience}</strong> xp</p>
            </div>
        </div>
    )
}