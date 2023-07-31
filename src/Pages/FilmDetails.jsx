import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import filmsService from "../Services/filmsService";
const FilmDetails = () => {
    const {id} = useParams();
    const [film, setFilm] = useState({});

    const fetchFilmByID = async () => {
        try {
            let response = await filmsService.fetchFilm(id);
            console.log(response);
            setFilm(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchFilmByID();
    }, [])

    return (
        <div>
            <h1> {film.title} </h1>
        </div>
    );
};

export default FilmDetails;