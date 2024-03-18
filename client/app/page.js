'use client'
import styles from "./page.module.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// Internal Import
console.log(ChainId);

const Home = ({ Component, pageProps }) => {
  // return <main className={styles.main}></main>;
  return (
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <Component {...pageProps} />;
    </ThirdwebProvider>
  );
};

export default Home;
