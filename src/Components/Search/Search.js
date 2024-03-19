import React from "react";


const Search = (props) => {
/**
 * Tendrá el input para hacer la búsqueda y el botón de buscar.
 */
	const {searchValue, onChangeValue, onClickSearch} = props;

	return (
		<React.Fragment>
			<input type={"text"} value={searchValue} onChange={onChangeValue} />
			<button onClick={onClickSearch}><i className="fa fa-search"></i>Buscar</button>
		</React.Fragment>
		
	)
}

export default Search;