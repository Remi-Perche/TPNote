import styles from './MovieCard.module.css';
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistProvider";
import { useContext } from "react";

const MovieCard = (movie) => {
    const { listWishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
    const { id, title, poster_path, vote_average } = movie;
    const imgURL = "https://image.tmdb.org/t/p/w500" + poster_path;
    const detailsURL = "/movie/" + id;

    const isInWishlist = listWishlist.some((item) => item.id === id);

    return (
        <div className={styles.card}>
            <img className={styles.picture} src={imgURL} alt="Affiche du film" />
            <p className={styles.title}>{title}</p>
            <p className={styles.rating}>{vote_average} ⭐</p>
            <div className={styles.buttons}>
                <Link className={styles.btnDetails} to={detailsURL}>Voir le détails</Link>
                <a
                    className={styles.btnWishlist}
                    onClick={() => isInWishlist ? removeFromWishlist(id) : addToWishlist(movie)}
                >
                    {isInWishlist ? "❌" : "🤍"}
                </a>
            </div>
        </div>
    );
};

export default MovieCard;
