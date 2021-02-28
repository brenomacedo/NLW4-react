import Sidebar from '../components/Sidebar'
import LeaderboardItem from '../components/LeaderboardItem'
import styles from '../styles/pages/Leaderboard.module.css'
import Head from 'next/head'
import { GetServerSideProps, GetStaticProps } from 'next'
import { getSession } from 'next-auth/client'
import api from '../services/api'
import axios from 'axios'


interface User {
    name: string
    completedChallanges: number
    totalExperience: number
    level: number
    image: string
}

interface LeaderboardProps {
    leaderboard: User[]
}

export default function Leaderboard({ leaderboard }: LeaderboardProps) {

    function renderItems() {
        return leaderboard.map((item, index) => (
            <LeaderboardItem completedChallanges={item.completedChallanges} name={item.name}
            totalExperience={item.totalExperience} level={item.level} position={index + 1}
            image={item.image} />
        ))
    }

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
                            {renderItems()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const leaderboard = await axios.get('http://localhost:3000/api/leaderboard')
    return {
        props: {
            leaderboard: leaderboard.data
        }
    }
}