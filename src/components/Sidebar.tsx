import styles from '../styles/components/Sidebar.module.css'
import { FaHome, FaMedal } from 'react-icons/fa'

interface SidebarProps {
    page: 'home' | 'leaderboard'
}

export default function Sidebar({ page }: SidebarProps) {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/logo-sidebar.svg" alt="move-it"/>
            </div>
            <div className={styles.pages}>
                <div className={styles.option}>
                    {page === 'home' && <div className={styles.decoration} />}
                    <FaHome size={30} color={page === 'home' ? '#6348ff' : '#ccc'}
                    style={{ cursor: 'pointer' }} />
                </div>
                <div className={styles.option}>
                    {page === 'leaderboard' && <div className={styles.decoration} />}
                    <FaMedal size={30} color={page === 'leaderboard' ? '#6348ff' : '#ccc'}
                    style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}