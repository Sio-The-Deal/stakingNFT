import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Block Busker NFT Dapp</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Minting */}
          {/* <Image src="/imgs/token.jpg" alt="NFT drop" width={77} height={77} /> */}
          <h2 className={styles.selectBoxTitle}>Mint a BUSKIE NFT</h2>
          <p className={styles.selectBoxDescription}>
             Limited NFTs . Join VIP discord . Unlock Exclusive Content . Earn STREET tokens
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/imgs/token.jpg" alt="token" width={77} height={77} />
          <h2 className={styles.selectBoxTitle}>Stake Your BUSKIES </h2>
          <p className={styles.selectBoxDescription}>
            Stake your BUSKIES NFT to <b>EARN FREE</b>{" "}
            STREET tokens everyday. Spend your STREET tokens on exclusive services. Check Discord.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;