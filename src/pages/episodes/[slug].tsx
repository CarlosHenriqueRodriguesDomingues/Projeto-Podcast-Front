import { format, parseISO  } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { api } from "../../components/services/api";
import { convertDuractionToTimeString } from "../../utills/ConvertDurationToTimeString";
import styles from "./episode.module.scss";
import Image from "next/image";


type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;

}

type EpisodeProps = {
  episode: Episode;

}


export default function Episode({episode} : EpisodeProps)   {

  return (
    <div className={styles.episode}>
      <div className={styles.thumbnailContainer}>
        <button type="button">
          <img src="/play-previous.svg" alt="voltar" width={20}></img>
        </button>
        <Image

        width={700}
        height={160}
        src={episode.thumbnail}
        objectFit="cover"
        
        />
        <button type = "button">
          <img src="/play.svg" alt="tocar episodio" ></img>
        </button>
        
      </div>
      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>
      <div className={styles.description}>
        {episode.description}
      </div>
    </div>

  );
}

export const getStaticPaths : GetStaticPaths = async ()=> {
  return{
    paths: [],
    fallback: "blocking",
  }

}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {slug} = ctx.params;
  const {data} = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", { locale: ptBR }),
    duration: Number(data.file.duration),
    durationAsString: convertDuractionToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url
  };

  return{
    props:{
      episode,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };

};
