import { useContract, useAddress, Web3Button, useOwnedNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const buskiesAddress = "0x2b2Ff9cA06CeA3C26a1f0E9D2755b7dBf38A463A";
  const stakeAddress = "0x7B521A656355caFAb66E6431E1956528A6069481";

  const { contract: buskiesContract } = useContract(buskiesAddress, "Buskies-Drop");
  const { contract: stakeContract } = useContract(stakeAddress);
  const { data: myNFTs } = useOwnedNFTs(buskiesContract, address);
  async function depositedNFT(Id: string ) {
    if(!address) return;

    const isApproved = await buskiesContract?.isApproved(
      address, stakeAddress);

    if(!isApproved) {
      await buskiesContract?.setApprovalForAll(stakeAddress, true);
    }

    await stakeContract?.call("deposit", (Id))
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Buskies NFT</h1>
        <Web3Button
          contractAddress={buskiesAddress} 
          action={(buskiesContract) => buskiesContract.erc721.claim(1)}       
        >Claim NFT</Web3Button>
        <br />
        <h1>My Collection</h1>
        <div>
          {myNFTs?.map((nft) => (
            <div>
              <h4>{nft.metadata.name}</h4>
              <ThirdwebNftMedia metadata={nft.metadata} height="88px" width="88px" />
              <Web3Button
                  contractAddress={stakeAddress} 
                  action={() => stakeNFT(nft.metadata.id))}       
                >Claim NFT</Web3Button>
           
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
