import { MovieType } from "../api";
import '../Styles/App.css'

interface CardProps{
  movie:MovieType,
}

const Card:React.FC<CardProps> = (props) => {
  return (
      <div className="Card">
        <img src={props.movie.Poster} className="CardImg"></img>
        <div className="CardContent">
        <h3>{props.movie.Title}</h3>
        <div className="Details">
        <div>{props.movie.Year}</div>
        <div style={{color:"SkyBlue"}}>{props.movie.Type}</div>
        </div>
        </div>
      </div>
  );
}

export default Card;