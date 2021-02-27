import styles from '../styles/components/Sidebar.module.css'
import { FaHome, FaMedal } from 'react-icons/fa'
import { useRouter } from 'next/router'

interface SidebarProps {
    page: 'home' | 'leaderboard'
}

export default function Sidebar({ page }: SidebarProps) {

    const router = useRouter()

    function toHome() {
        if(page === 'home') {
            return
        }

        router.push('/home')
    }

    function toLeaderboard() {
        if(page === 'leaderboard') {
            return
        }
        
        router.push('/leaderboard')
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/logo-sidebar.svg" alt="move-it"/>
            </div>
            <div className={styles.pages}>
                <div className={styles.option}>
                    {page === 'home' && <div className={styles.decoration} />}
                    <FaHome onClick={toHome} size={30} color={page === 'home' ? '#6348ff' : '#ccc'}
                    style={{ cursor: 'pointer' }} />
                </div>
                <div className={styles.option}>
                    {page === 'leaderboard' && <div className={styles.decoration} />}
                    <FaMedal onClick={toLeaderboard}
                    size={30} color={page === 'leaderboard' ? '#6348ff' : '#ccc'}
                    style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}