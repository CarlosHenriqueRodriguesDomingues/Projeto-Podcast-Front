import styles from "./styles.module.scss";
export function Player() {
  return (
    <div className={styles.playerConteiner}>
      <header>
        <img src="/playing.png" alt="tocando agora" width="50px" height="50px" />
        <strong>Tocando agora</strong>
      </header>
      <div className={styles.playerEmpty}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>
      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="shuffle.svg" alt="embaralhar" width="30px"></img>
          </button>
          <button type="button">
            <img src="play-previous.svg" alt="tocar anterior" width="30px"></img>
          </button>
          <button type="button" className={styles.playButton}>
            <img src="play.svg" alt="tocar" width="30px"></img>
          </button>
          <button type="button">
            <img src="play-next.svg" alt="Tocar próxima" width="30px"></img>
          </button>
          <button type="button">
            <img src="repeat.svg" alt="Repetir" width="30px"></img>
          </button>
        </div>
      </footer>
    </div>
  );
}
