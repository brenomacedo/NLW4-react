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
import { PrismaClient } from "@prisma/client";

interface HomeProps {
  level: number
  currentExperience: number
  challangesCompleted: number
  name: string
  image: string
  sub: string
}

export default function Home({ level, currentExperience,
  challangesCompleted, name, image, sub }: HomeProps) {
  return (
    <div className={styles.homeContainer}>
      <Sidebar page="home" />
      <ChallangesProvider initialLevel={level} initialCurrentExperience={currentExperience}
      initialChallangesCompleted={challangesCompleted} sub={sub}>
        <div className={styles.container}>
          <Head>
            <title>Inicio | Move it</title>
          </Head>

          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile name={name} image={image} />
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

  const prisma = new PrismaClient()

  let user = await prisma.user.findFirst({
    where: {
      sub: session.userId
    }
  })

  if(!user) {
    user = await prisma.user.create({
      data: {
        name: session.user.name,
        image: session.user.image,
        completedChallanges: 0,
        currentExperience: 0,
        totalExperience: 0,
        level: 1,
        sub: session.userId
      }
    })
  }

  await prisma.$disconnect()

  return {
    props: {
      level: user.level,
      currentExperience: user.currentExperience,
      challangesCompleted: user.completedChallanges,
      name: user.name,
      image: user.image,
      sub: user.sub
    }
  }
}