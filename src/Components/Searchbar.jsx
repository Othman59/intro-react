import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Dropdown, Row, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import FilmService from "../Services/FilmService";

const Searchbar = ({ genres, setSelectedGenre, selectedGenre, keywords, setKeywords ,onGenreClick}) => {
  const [films, setFilms] = useState([]);
  const [page,setPage]=useState()

  useEffect(() => {
    const fetchFilmsByGenre = async () => {
      if (selectedGenre) {
        const response = await FilmService.fetchFilm(page,selectedGenre);
        setFilms(response.data.results);
      }
    };

    fetchFilmsByGenre();
  }, [selectedGenre,page]);

  

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <Search size={16} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Rechercher des films..."
              aria-label="Search"
            />
            <Dropdown onSelect={onGenreClick}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Selection Genre
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {genres.map((genre) => (
                  <Dropdown.Item eventKey={genre.id} key={genre.id}>
                    {genre.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Searchbar;
