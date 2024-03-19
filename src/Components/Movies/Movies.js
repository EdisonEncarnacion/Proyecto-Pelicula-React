import React from "react";
import {Card}from "../Card";
import {Ratings} from "../Ratings";
import styles from "./Movies.module.css";

const Movies = (props) => {
/**
 * Desplegará un componente <Card /> por cada uno de los resultados de la búsqueda,
 * así como el componente de <Ratings />
 */

	const {data, onClickCard} = props;
	
	let moviesCards = data.map((movie) => {
		return (
			<React.Fragment key={movie.id}>
				<Card 
					title={movie.title} 
					year={movie.description} 
					image={movie.image} 
					onClickCard={() => onClickCard(movie.id)}
				/>
			</React.Fragment>
		)
	});


	return (
		<React.Fragment>
			<div className={styles.ratingsContainer}>
				{props.ratings && <Ratings ratings={props.ratings} />}
			</div>	
			<div className={styles.moviesContainer}>
				{moviesCards}
			</div>
		</React.Fragment>
	)
}

export default Movies;