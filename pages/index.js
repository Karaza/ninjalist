import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolores.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
