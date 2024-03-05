// Maria Alejandra Estrada Garcia 
// 202021060

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Reto() {
    const [characters, setCharacters] = useState([]);
    const [locations, setLocations] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    
    const [showCharacters, setShowCharacters] = useState(false);
    const [showLocations, setShowLocations] = useState(false);
    const [showEpisodes, setShowEpisodes] = useState(false);
    
    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
        setShowCharacters(true);
    };
    
    const fetchLocations = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/location");
        const data = await response.json();
        setLocations(data.results);
        setShowLocations(true);
    };
    
    const fetchEpisodes = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/episode");
        const data = await response.json();
        setEpisodes(data.results);
        setShowEpisodes(true);
    };
    
    const handleCloseCharacters = () => {
        setShowCharacters(false);
    };

    const handleCloseLocations = () => {
        setShowLocations(false);
    };

    const handleCloseEpisodes = () => {
        setShowEpisodes(false);
    };
    
    return (
        <Col className="text-center">
            <h1>RICK AND MORTY</h1>
            <Button onClick={fetchCharacters}>Characters</Button>
            <Button onClick={fetchLocations}>Locations</Button>
            <Button onClick={fetchEpisodes}>Episodes</Button>
    
            {showCharacters && (
                <div>
                    {characters.map((character) => (
                        <Card key={character.id}>
                            <Card.Body>
                                <h2>{character.name}</h2>
                                <img src={character.image} alt={character.name} />
                                <p>{character.species}</p>
                                <p>{character.status}</p>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button onClick={handleCloseCharacters}>Close</Button>
                </div>
            )}

            {showLocations && (
                <div>
                    {locations.map((location) => (
                        <Card key={location.id}>
                            <Card.Body>
                                <h2>{location.name}</h2>
                                <p>{location.type}</p>
                                <p>{location.dimension}</p>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button onClick={handleCloseLocations}>Close</Button>
                </div>
            )}

            {showEpisodes && (
                <div>
                    {episodes.map((episode) => (
                        <Card key={episode.id}>
                            <Card.Body>
                                <h2>{episode.name}</h2>
                                <p>{episode.episode}</p>
                                <p>{episode.air_date}</p>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button onClick={handleCloseEpisodes}>Close</Button>
                </div>
            )}
        </Col>
    );
}

export default Reto;
