import { useState,useEffect } from "react";
import Card from "./Card";
import '../Styles/App.css'
import {MovieType,movieAPI} from '../api'

interface MoviesCatalogProps{
  category:string,
  title:string,
}


const MoviesCatalog:React.FC<MoviesCatalogProps> = (props) => {

  const [movies, setMovies] = useState<MovieType[]>([]);
  useEffect(() => {
    movieAPI.getMovie(props.category, props.title).then((movies) => {
      setMovies(movies || []);
    });
  }, [props.category,props.title]);

  return (
    <div className="Catalog">
      <div className="CardContainer">
        {movies.slice(0, 3).map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
      <div className="CardContainer">
        {movies.slice(3, 6).map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesCatalog;