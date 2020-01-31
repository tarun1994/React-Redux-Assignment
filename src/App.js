// import React from 'react';
// import {connect} from 'react-redux';
// import './App.css';
// import fetchPopularMovies from './store/actions/fetchPopularMovies'

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       <h3>REDUX MOVIELIST APP</h3>
       
//     <br/>
//         {props.movies.length === 0 ?
//         <p>THERE ARE NO USERS</p> :
//         props.movies.map(movie=> <p key={movie.id}></p>)}
//     <br/>
//     <button onClick={props.fetchUsers}>FETCH USERS</button>

//       </header>
//     </div>
//   );
// }
// const MapStateToProps = (state) => {
//   return {
//   movies: state.movies
// };
// };
// const MapDispatchToProps = (dispatch) => {
//   return {
//   fetchPopularMovies: ()=> dispatch(fetchPopularMovies)
// };
// };
// export default connect(MapStateToProps, MapDispatchToProps)(App);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Movies from './components/Movies'
import {Provider} from 'react-redux'
import store from './store/store'
class App extends Component {
    render() {
        
return (
    <div className="App">
  
  <Provider store={store}>
      <div className="App">
     <Movies/>
         
      
      <footer className="main-footer">
        <h4>Designed & developed by Tarun Saini</h4>
      </footer>
      </div>
      </Provider>
</div>
)};
};
export default App;

