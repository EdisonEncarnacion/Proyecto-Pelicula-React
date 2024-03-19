import React from "react";
import styles from "./Ratings.module.css";

const Ratings = (props) => {
/**
 * Contendrá la información del rating proveniente de las props.ratings
 */
	const {ratings} = props;
	return (
		<React.Fragment>
			{Object.keys(ratings).length ? <p className={styles.title}>Ratings</p> : 
				<p className={styles.defaultMessage}>Da click en una película para ver los ratings</p>}
			{ratings.theMovieDb && <div className={styles.ratingItem}>
				<p>{ratings.theMovieDb}</p>
				<p>The movie Db</p>
				</div>}
			{ratings.rottenTomatoes && <div className={styles.ratingItem}>
				<p>{ratings.rottenTomatoes}</p>
				<p>Rotten Tomatoes</p>
				</div>}
			{ratings.metacritic && <div className={styles.ratingItem}>
				<p>{ratings.metacritic}</p>
				<p>Meta Critic</p>
				</div>}
		</React.Fragment>
	)
}

export default Ratings;