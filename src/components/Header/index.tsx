import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import style from "../Header/styles.module.scss";
export default function Header(props) {
  console.log(props.episodes);
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR
  });
  return (
    <header className={style.headerConteiner}>
      <img src="/logo.png" alt="Podcaster" width="200px" height="150px" />

      <p>O melhor podcaster para você!</p>

      <span> {currentDate}</span>
    </header>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8000/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data
    }
  };
}
