import {API_KeyV3, API_URL} from '../utils/API';

 const APIServices = {

     getMovies: async (sortBy, page,currentLanguage, url_genre ) => {
       const res =  await fetch(`${API_URL}discover/movie?api_key=${API_KeyV3}&sort_by=${sortBy}&page=${page}&language=${currentLanguage}${url_genre}`);
        return res.json();
    },

    getLanguages: async () => {
        const res = await fetch(`${API_URL}configuration/languages?api_key=${API_KeyV3}`);
        return res.json();
    },

    getGenres: async (currentLanguage) => {
        const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KeyV3}&language=${currentLanguage}`)
        return res.json();
    }

}

export default APIServices;