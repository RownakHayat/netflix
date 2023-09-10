import Image from "next/image";
import { Movie } from "../../../typeinf";

interface Props{
    // movie: Movie | DocumentData
    movie: Movie
}

const Thumbnail = ({movie}:Props) => {
    return (
        <div className="relative h-28 min-w-[180px] cursor-pointer transition-transform 
        duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-105 md:hover:scale-105">
             <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
      />
        </div>
    );
};

export default Thumbnail;