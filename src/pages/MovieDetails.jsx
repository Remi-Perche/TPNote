import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css'
import { useEffect, useContext, useState } from 'react';
import CastCard from '../components/CastCard';
import { WishlistContext } from "../context/WishlistProvider";
import MovieCard from "../components/MovieCard";

const MovieDetails = () => {
    const { id } = useParams();
    const [ movie, setMovie ] = useState([]);
    const [ movieSimilar, setMovieSimilar ] = useState([]);
    const [ casts, setcasts ] = useState([]);
    const { addToWishlist } = useContext(WishlistContext);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=59d5a475554ef6dac15ec2dc29ee6014")
        .then((response) => response.json())
        .then((dataCast) => setcasts(dataCast.cast.slice(0, 10)))
        fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=59d5a475554ef6dac15ec2dc29ee6014")
        .then((response) => response.json())
        .then((dataMovies) => setMovie(dataMovies))
        fetch("https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=59d5a475554ef6dac15ec2dc29ee6014")
        .then((response) => response.json())
        .then((dataMoviesSimilar) => setMovieSimilar(dataMoviesSimilar.results))
    }, [])
    return (
        <div className={styles["movie-details"]}>
            <div className={styles.movie}>
                <img 
                    className={styles["movie-poster"]} 
                    src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} 
                    alt={'Affiche du film ' + movie.title} 
                />
                <div className={styles["movie-info"]}>
                    <a className={styles.btnWishlist} onClick={() => addToWishlist(movie)}>🤍</a>
                    <h2>{movie.title}</h2>
                    <p><strong>Date de sortie :</strong> {movie.release_date}</p>
                    <p><strong>Note :</strong> {movie.vote_average} ⭐ ({movie.vote_count} votes)</p>
                    <p><strong>Popularité :</strong> {movie.popularity}</p>
                    <p>
                        <strong>Genres : </strong>
                        {movie.genres && movie.genres.length > 0 
                            ? movie.genres.map((genre) => genre.name).join(", ") 
                            : "Aucun genre disponible"}
                    </p>
                    <p className={styles["movie-overview"]}><strong>Synopsis :</strong> {movie.overview}</p>
                </div>
            </div>
            <h2>Acteurs</h2>
            <div className={styles.actors}>
                {casts && casts.length > 0
                    ? casts.map((cast) => (
                        <CastCard key={cast.id} profile_path={cast.profile_path} name={cast.name} character={cast.character}/>
                    ))
                    : "Aucun acteur à afficher"
                }
            </div>
            <h2>Films similaires</h2>
            <div className={styles.movieSimilar}>
                {movieSimilar && movieSimilar.length > 0
                    ? movieSimilar.map((movie) => (
                        <MovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average}/>
                    ))
                    : "Aucun film similaire à afficher"
                }
            </div>
        </div>
    );
}

export default MovieDetails