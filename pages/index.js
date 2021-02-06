import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Explicabo aperiam doloribus excepturi provident. Numquam, expedita
        voluptatum a veritatis eligendi sint?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        quae assumenda alias beatae odit explicabo omnis sit nesciunt aspernatur
        minus!
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
