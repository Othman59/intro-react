import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { URL_IMAGE } from '../Services/url';



const CardFilm = ({film}) => {
    return (
      <Card className={"col-2"}>
      <Card.Img variant="top" src={URL_IMAGE + film.poster_path} />
      <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Card.Text>
              {film.overview}
          </Card.Text>
          <Link to={"/film/"+film.id}>Voir details</Link>
      </Card.Body>
  </Card>
    );
};

export default CardFilm;