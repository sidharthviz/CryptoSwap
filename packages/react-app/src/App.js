
import React from "react"
import { useEthers } from "@usedapp/core";

import styles from './styles';
import { uniswapLogo } from './assets';

import { Exchange, Loader, WalletButton } from "./components";
import { usePools } from "./hooks/usePools";


 

const App = () => {

  const {account} = useEthers();
  const [loading, pools] = usePools();


  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
          <header className={styles.header}>
            <img 
            src={uniswapLogo}
            alt="uniswap logo"
            className="w-16 h-16
            object-contain"
            />
            <WalletButton/>
            </header> 

            <div className={styles.exchangeContainer}>
              <h1 className={styles.headTitle}>Uniswap 3.0</h1>
              <p className={styles.subTitle}>Exchange Tokens in seconds</p>

              <div className={styles.exchangeBoxWrapper}>
                <div className={styles.exchangeBox}>
                  <div className="pink_gradient" />
                  <div className={styles.exchange}>
                   {account ? (
                    loading ? (
                      <Loader title="Loading Pools, Please Wait!" />
                     ) : <Exchange pools = {pools} />
                   ) : <Loader title=" Please Connect Your Wallet" />}

                  </div>
                  <div className="blue_gradient" />
                  
                </div>

              </div>

            </div>
      </div>
    </div>
  )
}

export default App;