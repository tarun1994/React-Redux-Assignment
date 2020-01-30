import React, {Component} from 'react';


class Movie extends Component {

    render(){
        const {movie} = this.props;
        let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        
       const styles = {width: '100%', height: '100%', backgroundImage:poster ? (`url(${poster})`) : null }
        return(
            <div>
                
            <div className="movie-item"  >
                    <div className="movie-cover" style={styles}>
                        <div className="movie-rating"><span className="star"></span><h6>{movie.vote_average}</h6></div>
                    </div>
                    <div className="text-container ">
                       
                        <h6>{movie.title}{movie.name}</h6>
                    
                    </div>
                    <div class="middle">
                        <div class="text">{movie.overview}</div>
                    </div>
            </div>
        </div>
        )
    }
}


export default Movie;
