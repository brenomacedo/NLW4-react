import Sidebar from '../components/Sidebar'
import LeaderboardItem from '../components/LeaderboardItem'
import styles from '../styles/pages/Leaderboard.module.css'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if(!session) {
        ctx.res.setHeader('location', '/')
        ctx.res.statusCode = 301
        ctx.res.end()

        return {
            props: {}
        }
    }

    return {
        props: {}
    }
}