import React, { Component } from 'react';
import Movie from './Movie';
import $ from "jquery";
import {connect} from 'react-redux'
import {mostPopular} from '../actions/fetchPopularMovies'


class Movies extends Component{
    page=1;
   
    render(){
       
        return(
            <div>
               
                <h2 align="center">Most Popular Movies</h2>
                <div class="popular"> <button className="card active"  onClick={(event) => this.props.mostPopular(this.page)}>Popular</button>
                </div>
                <div className="movie-container">
                <div className="wrap">
                    {this.props.movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                    />
                    ))}
                    </div>
                </div>
              
                <div class="popular"> <button className="card active"  onClick={(event) => this.props.mostPopular(++this.page)}>Load more</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
  movies: state.movies.searchedMovies,
})

export default connect(mapStateToProps, {mostPopular})(Movies)