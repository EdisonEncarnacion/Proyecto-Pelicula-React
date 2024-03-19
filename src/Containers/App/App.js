import React from "react";
import { Header, Movies, Search } from "../../Components";
import styles from "./App.module.css";

class App extends React.Component {
/**
 * En este componente haremos la llamada a la API. Contendrá <Header />, <Search />
 * y <Movies />
 */
  constructor(props) {
    super(props);
    this.state = {
      apiKey: process.env.REACT_APP_API_KEY,
      searchValue: "",
      moviesResults: [],
      ratings: [],
      loading: false,
    };
  }

  searchMovie = () => {
    if (!this.state.searchValue.length) {
      return null;
    }
    
    this.setState({ ratings: [], loading: true });
    fetch(`https://imdb-api.com/es/API/SearchMovie/${this.state.apiKey}/${this.state.searchValue}`)
    .then(res => res.json())
    .then(json => this.setState({ moviesResults: json.results, loading: false }));
  }

  onChangeValue = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  onClickCard = (selected) => {
    fetch(`https://imdb-api.com/en/API/Ratings/${this.state.apiKey}/${selected}`)
    .then(res => res.json())
    .then(json => this.setState({ ratings: json }));
  }

  render() {
    const {moviesResults, loading, ratings, searchValue} = this.state;
    
    return (
      <React.Fragment>
        <div className={styles.appContainer}>
          <Header>
            <Search 
              searchValue={searchValue} 
              onChangeValue={this.onChangeValue} 
              onClickSearch={this.searchMovie} 
            />
          </Header>
          {moviesResults.length ? (
            <Movies 
              data={moviesResults} 
              onClickCard={this.onClickCard} 
              ratings={ratings} 
            />
          ) : loading ? (
            <div className={styles.defaultMessage}>loading...</div>
          ) : (
            <div className={styles.defaultMessage}>Busca una película</div>
          )}
        </div>
        
      </React.Fragment>
    )
  }
}

export default App;