/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Spinner, Pagination } from "react-bootstrap";
import FilmService from "../Services/FilmService";
import CardFilm from "../Components/CardFilm";
import Searchbar from "../Components/Searchbar";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const[maxPage,setMaxPage] = useState(500)
  const [totalPages, setTotalPages] = useState();
  const [firstPage, setFirstPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [selectedGenre, setSelectedGenre] = useState(""); // New state for the selected genre
  const [genres,setGenres] = useState([]);
  const [keywords,setKeywords] = useState("")

  const handleGenreClick = async (genreId) =>{
    setSelectedGenre(genreId);
    const response = await FilmService.fetchFilm(page,genreId);
    setFilms(response.data.results);
    setMaxPage(response.data.total_pages);
  }
 
  useEffect(() => {
      const fetchFilm = async () => {
          try {
          const response = await FilmService.fetchFilm(page, selectedGenre); // Include selectedGenre for genre filtering
          setFilms(response.data.results);
          setMaxPage(response.data.total_pages);
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
      setLoading(true);
      fetchFilm();
    
  }, [page , selectedGenre])

 useEffect(() => {
    const fetchGenre = async () => {
        try {
        const response = await FilmService.fetchGenre(); // Include selectedGenre for genre filtering
        setGenres(response.data.genres);
      } catch (e) {
        console.log(e);
      }
    };
    fetchGenre()
 }, [])


 const fetchFilmsByKeyword = async () => {
  try {
    const response = await FilmService.fetchFilmByKeyword(
      keywords,
      currentPage
    );
    setFilms(response.data.results);
    setTotalPages(response.data.total_pages);
    setFirstPage(response.data.page);
  } catch (e) {
    console.log(e);
  }
};

useEffect(() => {
  if (keywords) {
    fetchFilmsByKeyword();
  } else {
    const fetchFilm = async () => {
      try {
      const response = await FilmService.fetchFilm(page, selectedGenre); // Include selectedGenre for genre filtering
      setFilms(response.data.results);
      setMaxPage(response.data.total_pages);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  setLoading(true);
  fetchFilm();
  }
}, [currentPage, keywords]);




  return (
    <>
      {loading == true ? (
        <div className={"row justify-content-center "}>
          <Spinner animation="border" variant="primary" />
        </div>
        ) : (
        <div className={" row justify-content-center"}>
            <Searchbar
            setSelectedGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
            genres={genres}
            keywords={keywords}
            setKeywords={setKeywords}
            onGenreClick={handleGenreClick}
            />
          {films.map((film,index) => {
            return <CardFilm film={film} key={index}/>
          })}
          <Pagination>
            {/* Pagination logic remains the same */}
            {/* ... */}
          </Pagination>
        </div>
      )}
    </>
  );
};

export default Films;




