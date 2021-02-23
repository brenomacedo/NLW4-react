import styles from '../styles/components/Countdown.module.css'

export default function Countdown() {
    return (
        <div className={styles.container}>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <div>:</div>
            <div>
                <span>2</span>
                <span>5</span>
            </div>
        </div>
    )
}