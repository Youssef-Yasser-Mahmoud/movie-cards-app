import React from 'react';
import Card from './Card';
import Loading from './Loading';
import './card.css';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { moviesArray: [], loading: false };
  }

  async fetchingData() {
    try {
      this.setState(() => ({ loading: true }));
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7`
      );
      const data = await res.json();
      this.setState(() => ({ moviesArray: data.results }));
    } catch (error) {
      console.log('Error', error);
    } finally {
      this.setState(() => ({ loading: false }));
    }
  }

  componentDidMount() {
    this.fetchingData();
  }

  render() {
    return (
      <>
        <h1>Movie List</h1>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className='cards-wrapper'>
            {this.state.moviesArray.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Cards;
