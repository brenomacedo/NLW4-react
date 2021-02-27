import styles from '../../styles/components/LeaderboardItem.module.css'

export default function LeaderboardItem() {
    return (
        <div className={styles.container}>
            <div className={styles.level}>
                1
            </div>
            <div className={styles.user}>
                <div className={styles.userPicture}></div>
                <div className={styles.userDescription}>
                    <p>Breno Macêdo</p>
                    <span><img src="/icons/level.svg" alt=""/> Level 50</span>
                </div>
            </div>
            <div className={styles.challanges}>
                <p><strong>9999</strong> completados</p>
            </div>
            <div className={styles.xp}>
            <p><strong>15500</strong> xp</p>
            </div>
        </div>
    )
}