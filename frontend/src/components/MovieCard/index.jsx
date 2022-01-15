import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

const movie = {
    id: 1,
    image: "https://files.fm/thumb_show.php?i=59wrqvyrq",
    title: "Te amo!",
    count: 2,
    score: 4.5
};


function MovieCard() {
    return (

        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>

    );
}

export default MovieCard;
