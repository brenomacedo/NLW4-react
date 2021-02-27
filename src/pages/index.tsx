import styles from '../styles/pages/Login.module.css'
import { FaGithub, FaArrowRight } from 'react-icons/fa'

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.bannerImage} />
            </div>
            <div className={styles.form}>
                <form>
                    <div className={styles.formBanner} />
                    <h3>Bem-vindo</h3>
                    <div className={styles.formDescription}>
                        <FaGithub size={40} color="#b2b9ff" />
                        <p>Faça login com seu Github <br/> para começar</p>
                    </div>
                    <div className={styles.input}>
                        <input placeholder="Digite seu username" type="text"/>
                        <button>
                            <FaArrowRight color='white' size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}