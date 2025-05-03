import React from 'react';
import './card.css';
class Card extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className='container'>
        <div className='image'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
        <p>
          <strong>Title</strong>: {movie.title}
        </p>
        <p>
          <strong>Release date</strong>: {movie.release_date}
        </p>
        <div>
          <p>
            <strong>Vote Average</strong>: {movie.vote_average}
          </p>
          <p>
            <strong>Vote Count</strong>: {movie.vote_count}
          </p>
        </div>
      </div>
    );
  }
}
export default Card;
