import styles from "./page.module.css";

// Internal Import

const Home = ({ Component, pageProps }) => {
  // return <main className={styles.main}></main>;
  return <Component {...pageProps} />;
};

export default Home;
