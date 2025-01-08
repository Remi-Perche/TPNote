import styles from './CastCard.module.css';

const CastCard = (cast) => {
    const { profile_path, name, character } = cast;
    const imgURL = profile_path
        ? 'https://image.tmdb.org/t/p/w500' + profile_path
        : '';

    return (
        <div className={styles.card}>
            <img className={styles.picture} src={imgURL} alt={'Portrait de ' + name} />
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.character}>Personnage : {character}</p>
            </div>
        </div>
    );
};

export default CastCard;
