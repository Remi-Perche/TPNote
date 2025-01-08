import { useContext, useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";
import styles from "./MovieList.module.css"
import { SearchContext } from "../context/SearchProvider";

const MovieList = () => {
    const [dataMovie, setDataMovie] = useState([]);
    const { search } = useContext(SearchContext);
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=59d5a475554ef6dac15ec2dc29ee6014")
      .then((response) => response.json())
      .then((data) => {
        let moviesFiltered = [];
        if(search != "") {
            moviesFiltered = data.results.filter((movie) => movie.title.toUpperCase().includes(search.toUpperCase()))
        } else {
            moviesFiltered = data.results;
        }
        setDataMovie(moviesFiltered)
        })
    }, [search])
    return (
        <div className={styles.grille}>
            {dataMovie.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average}/>
            ))}
        </div>
    )
}

export default MovieList