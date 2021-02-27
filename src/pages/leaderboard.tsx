import Sidebar from '../components/Sidebar'
import LeaderboardItem from '../components/LeaderboardItem'
import styles from '../styles/pages/Leaderboard.module.css'
import Head from 'next/head'

export default function Leaderboard() {
    return (
        <div className={styles.leaderboardContainer}>
            <Head>
                <title>Leaderboard | Move it</title>
            </Head>
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