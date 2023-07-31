import axios from "axios";


function fetchFilm(page, selectedGenre){
    return axios.get(`https://api.themoviedb.org/3/discover/movie?language=fr&page=${page}&with_genres=${selectedGenre}`);
}


function fetchGenre() {
  const language = "fr";
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=${language}`);
}

function fetchFilmByKeyword(keyword,currentPage) {
  const language = "fr";
  return axios.get(`https://api.themoviedb.org/3/search/movie?language=${language}&query=${keyword}&page=${currentPage}`);
}


// eslint-disable-next-line import/no-anonymous-default-export
export default{fetchFilm,fetchGenre,fetchFilmByKeyword};