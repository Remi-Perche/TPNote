import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from './Navbar.module.css';
import { SearchContext } from "../context/SearchProvider";
import { useContext } from "react";

const Navbar = () => {
    const { newSearch } = useContext(SearchContext)
    const navigate = useNavigate();

    const handleFocus = () => {
        navigate("/");
    };

    const changeSearch = () => {
        newSearch(document.getElementById("filter").value)
    }

    return (
        <>
            <nav className={styles.navbar}>
                <h1 className={styles.logo}>The Movie DB</h1>
                <input
                    type="text"
                    name="filter"
                    id="filter"
                    className={styles.searchInput}
                    placeholder="Rechercher un film..."
                    onFocus={handleFocus}
                    onChange={changeSearch}
                />
                <div className={styles["navbar-links"]}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/wishlist" className={styles.link}>Wishlist</Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
