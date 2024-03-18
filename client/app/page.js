"use client";
import styles from "./page.module.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "../context";

// Internal Import

const Home = ({ Component, pageProps }) => {
  // return <main className={styles.main}></main>;
  return (
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <StateContextProvider>
        <Component {...pageProps} />;
      </StateContextProvider>
    </ThirdwebProvider>
  );
};

export default Home;
