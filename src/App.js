import React, { Component }from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()   // 순서(중요)
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidupdate
  state = {
    movies: [
      {
        title: "Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
      },
      {
        title: "Star Wars",
        poster: "http://ae01.alicdn.com/kf/UTB8DYAekqrFXKJk43Ovq6ybnpXax/Vintage-Star-Wars-Poster-i-want-you-Retro-art-Wall-home-Decoration-Movie-poster-Wall-stickers.jpg"
      },
      {
        title: "TrainSpotting",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqtcZURaTLD6NrOEvSLJ4enmQfiWxgk-WaBuBhf3miz73aZy4"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies:[
          ...this.state.movies,
          {
            title: "TrainSpotting",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqtcZURaTLD6NrOEvSLJ4enmQfiWxgk-WaBuBhf3miz73aZy4"
          }
        ]
      })
    }, 5000)
  }
  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })} 
      </div>
    )
  }
}

export default App;
