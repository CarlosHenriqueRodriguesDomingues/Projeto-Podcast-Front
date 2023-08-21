import { Player } from "../components/Player";
import styles from "../styles/app.module.scss";
import Header from "../components/Header";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />;
      </main>
      <Player />
    </div>
  );
}
