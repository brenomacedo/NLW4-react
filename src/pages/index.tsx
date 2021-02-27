import styles from '../styles/pages/Login.module.css'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import Head from 'next/head'

export default function Login() {

    const [username, setUsername] = useState("")    
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Login | Move it</title>
            </Head>
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
                        <input value={username} onChange={e => setUsername(e.target.value)}
                        placeholder="Digite seu username" type="text"/>
                        <button style={{
                            backgroundColor: username ? "#4cd62b" : "#4953b8"
                        }}>
                            <FaArrowRight color='white' size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}