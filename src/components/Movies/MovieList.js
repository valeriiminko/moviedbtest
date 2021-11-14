import React,{useState, useEffect} from 'react';
import MovieItem from './MovieItem';
import {API_KeyV3, API_URL} from '../../tools/API';

export default function MovieList({moviesData, sortBy, page, currentLanguage, languageList, setlanguageList}) {

    // const [moviesData, setmonviesData] = useState([

    // ])


    // useEffect(() => {
    //    fetch(`${API_URL}discover/movie?api_key=${API_KeyV3}&language=${currentLanguage}&sort_by=${sortBy}&page=${page}`)
    //    .then(data => data.json())
    //    .then(res => setmonviesData(res.results))


    // },[ sortBy, page]);

    // console.log(moviesData)
    return (
        <div className="row"> 
            {moviesData.map((movie) => {
                // console.log(movie)
                return (
                <div key={movie.id} className="col-6 mb-4">
                        <MovieItem item={movie}/>
                </div>
                )
            })}
        </div>
    )
}
