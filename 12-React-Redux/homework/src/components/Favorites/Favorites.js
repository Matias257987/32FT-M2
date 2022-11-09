import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {
  handleClick (movieId) {
    this.props.removeMovieFavorite(movieId)
  };

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favorite.map((movie) =>{
            return (
              <li>
                <Link to={`/movie/${movie.id}`}>
                  <span>{movie.Title}</span>
                </Link>
                <button onClick={() => this.handleClick(movie.id)}>Remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite,
  }
};

const mapDispatchToProps = (dispatch) => { 
  return {
    removeMovieFavorite: (id) => {
      dispatch(removeMovieFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
