import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}
