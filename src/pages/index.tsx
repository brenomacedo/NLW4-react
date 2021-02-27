import styles from '../styles/pages/Login.module.css'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import Head from 'next/head'
import { getSession, signIn } from 'next-auth/client'
import { GetServerSideProps } from 'next'

export default function Login() {

    function login() {
        signIn('github', { callbackUrl: 'http://localhost:3000/home' })
    }
    
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
                        <div className={styles.sign}>
                            Entrar com o github
                        </div>
                        <button type="button" style={{ backgroundColor: "#4cd62b" }} onClick={login}>
                            <FaArrowRight color='white' size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const session = await getSession(ctx)

    if(session) {
        ctx.res.setHeader('location', '/home')
        ctx.res.statusCode = 301
        ctx.res.end()
    }

    return {
        props: {}
    }
    
}