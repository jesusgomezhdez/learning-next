import Head from 'next/head'
import { NavBar } from '../NavBar'
import styles from './MainLayout.module.css'


export const MainLayout = ({children}) => {
  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}
