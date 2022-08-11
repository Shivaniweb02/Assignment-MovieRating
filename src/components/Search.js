import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Favourites from './Favourites';

const Search = () => {

    const [curGenre, setCurGenre] = useState('All Genres');
    const [favourites, setFavourites] = useState([]);
const [myOptions, setMyOptions] = useState([])
let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  }
  let filteredMovies = []

  filteredMovies = curGenre == "All Genres" ? favourites : favourites.filter((movie) => genreids[movie.genre_ids[0]] == curGenre)
  let del = (movie) => {
    let newArray = favourites.filter((m) => m.id != movie.id)
    setFavourites([...newArray])
    localStorage.setItem("imdb", JSON.stringify(newArray))
  }
const getDataFromAPI = () => {
	console.log("Options Fetched from API")

	fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9').then((response) => {
	return response.json()
	}).then((res) => {
	console.log(res)
	for (var i = 0; i < res.length; i++) {
		myOptions.push(res[i].title)
	}
	setMyOptions(myOptions)
	})
}

return (
    
	<div style={{ marginLeft: '40%', marginTop: '60px' ,backgroundColor:'white'}}>
	<h3  style={{color: "white"}}>Greetings from GeeksforGeeks!</h3>
	<Autocomplete
		style={{ width: 500 }}
		freeSolo
		autoComplete
		autoHighlight
		options={myOptions}
		renderInput={(params) => (
		<TextField {...params}
			onChange={getDataFromAPI}
			variant="outlined"
			label="Search Box"
		/>
		)}
	/>
 
	</div>
    
);
}


export default Search
