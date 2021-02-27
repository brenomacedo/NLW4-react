import Sidebar from '../components/Sidebar'
import LeaderboardItem from '../styles/components/LeaderboardItem'
import styles from '../styles/pages/Leaderboard.module.css'

export default function Leaderboard() {
    return (
        <div className={styles.leaderboardContainer}>
            <Sidebar page="leaderboard" />
            <div className={styles.container}>
                <div className={styles.grid}>
                    <h2>Leaderboard</h2>
                    <div className={styles.gridTable}>
                        <div className={styles.tableHead}>
                            <p className={styles.position}>Posição</p>
                            <p className={styles.user}>Usuário</p>
                            <p className={styles.challanges}>Desafios</p>
                            <p className={styles.xp}>Experiência</p>
                        </div>
                        <div className={styles.tableBody}>
                            <LeaderboardItem />
                            <LeaderboardItem />
                            <LeaderboardItem />
                            <LeaderboardItem />
                            <LeaderboardItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}