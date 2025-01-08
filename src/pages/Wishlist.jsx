import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import styles from './Wishlist.module.css';
import { WishlistContext } from "../context/WishlistProvider";

const Wishlist = () => {
    const { listWishlist } = useContext(WishlistContext);

    return (
        <div className={styles["wishlist-container"]}>
            <h1>Ma Wishlist</h1>
            <p className={styles["movie-count"]}>
                {listWishlist.length} {listWishlist.length > 1 ? "films" : "film"} dans la wishlist
            </p>
            {listWishlist.length > 0 ? (
                <div className={styles["movie-grid"]}>
                    {listWishlist.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            vote_average={movie.vote_average}
                        />
                    ))}
                </div>
            ) : (
                <p className={styles["empty-message"]}>
                    Votre wishlist est vide. Ajoutez des films pour les voir ici !
                </p>
            )}
        </div>
    );
};

export default Wishlist;
