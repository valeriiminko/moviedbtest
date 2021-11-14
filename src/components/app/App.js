import React,{useState, useEffect} from 'react';
import './App.scss';
import Filters from '../Filters/Filters';
import MovieList from '../Movies/MovieList';
import {API_KeyV3, API_URL} from '../../tools/API';


function App() {
  // const [sortBy, setsortBy] = useState({
  //   sort_by: 'popularity.desc',
  // });
  const [moviesData, setmonviesData] = useState([

  ])
  const [sortBy, setsortBy] = useState('popularity.desc');
  const [page, setPage] = useState(1);
  const [currentLanguage, setcurrentLanguage] = useState('en');
  const [languageList, setlanguageList] = useState([]);
  const [currentGengre, setcurrentGenre] = useState([]);
  const [genreList, setgenreList] = useState([]);


const GenreIdList= currentGengre.map(item => item.id).join(',');
const url_genre = GenreIdList ? `&with_genres=${ GenreIdList }` : '';
console.log(url_genre)
  useEffect(() => {

    fetch(`${API_URL}discover/movie?api_key=${API_KeyV3}&sort_by=${sortBy}&page=${page}&language=${currentLanguage}${url_genre}`)
       .then(data => data.json())
       .then(res => setmonviesData(res.results))

    fetch(`${API_URL}configuration/languages?api_key=${API_KeyV3}`)
       .then(data => data.json())
       .then(res => {
           const newLNlist = res;
            return setlanguageList(newLNlist);
       })

       fetch(`${API_URL}/genre/movie/list?api_key=${API_KeyV3}&language=${currentLanguage}`)
       .then(data => data.json())
       .then(res => {
          const newGenreList = res.genres;
          setgenreList(newGenreList);
       })
  },[ sortBy, page, currentLanguage, currentGengre])

  const onChangeFilters = (e) => {
    let value = e.target.value;
    // const newsortBy = {
    //   ...sortBy,
    //   [e.target.name]: [e.target.value]
    // }
    if(value !== sortBy){
      setsortBy(value);
      setPage(1);
    }
    
  }

  const onChangeLanguage = (e) => {
    let value = e.target.value;
    if(value !== currentLanguage){
         setcurrentLanguage(value)
         setPage(1);
      }
    }

  const onSwitchPage = (page) => {
      setPage(page);
  }

  const onSelectGenre = (value) => {
    const newArr = [...currentGengre, value];
    console.log(newArr)
    setcurrentGenre(newArr)
    //   if(value !== currentGengre){
    //     console.log(value)
    //     setcurrentGenre(newArr)
    //     setPage(1);
    // }
  }

  return (
    <div className="container">
      {/* <header className="App-header">
      </header> */}

      <div className="row mt-4">
        <div className="col-4">
          <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                  <h3>Filters:</h3>
                  <Filters sortBy={sortBy} 
                  onChangeFilters={onChangeFilters} 
                  page={page}
                  onSwitchPage={onSwitchPage}
                  languageList={languageList}
                  currentLanguage={currentLanguage}
                  onChangeLanguage={onChangeLanguage}
                  genreList={genreList}
                  onSelectGenre={onSelectGenre}
                  currentGengre={currentGengre}
                  />
              </div>
          </div>
        </div>
      
      <div className="col-8">
        <MovieList 
            sortBy={sortBy} 
            page={page}
            moviesData={moviesData}
            />
      </div>
      </div>
    </div>
  );
}

export default App;
