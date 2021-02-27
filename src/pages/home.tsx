import CompletedChallanges from "../components/CompletedChallanges";
import ChallangeBox from "../components/ChallangeBox";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head'
import CountdownProvider from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import ChallangesProvider from "../contexts/ChallangesContext";
import Sidebar from "../components/Sidebar";
import { getSession } from "next-auth/client";

interface HomeProps {
  level: number
  currentExperience: number
  challangesCompleted: number
}

export default function Home({ level, currentExperience, challangesCompleted }: HomeProps) {
  return (
    <div className={styles.homeContainer}>
      <Sidebar page="home" />
      <ChallangesProvider initialLevel={level} initialCurrentExperience={currentExperience}
      initialChallangesCompleted={challangesCompleted}>
        <div className={styles.container}>
          <Head>
            <title>Inicio | Move it</title>
          </Head>

          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallanges />
                <Countdown />
              </div>
              <div>
                <ChallangeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallangesProvider>
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

  const { level, currentExperience, challangesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challangesCompleted: Number(challangesCompleted)
    }
  }
}