import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">My Assessment <br /> Project!</a>
        </h1>

        <p className={styles.description}>
          Get started by clicking{' '}
          <code className={styles.code}>a Menu 📦</code>
        </p>

        <div className={styles.grid}>

          <Link href="/homepage">
            <div className={styles.card}>
              <h2>Homepage Project &rarr;</h2>
              <p>Wanna how I designed it? click here.</p>
            </div>
          </Link>

          <Link href="/github">
            <div className={styles.card}>
              <h2>Github API Project &rarr;</h2>
              <p>Check out my simple Github repository projects.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://iam.successchukwu.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span className={styles.logo}>
            <img src="https://iam.successchukwu.com/img/hero-img.png" alt="Success Chukwu" width={16} />
            {' '} Success Chukwu
          </span>
        </a>
      </footer>
    </div>
  )
}
