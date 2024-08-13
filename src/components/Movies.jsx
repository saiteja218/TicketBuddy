import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const movie_api = "https://api.themoviedb.org/3/movie/now_playing?api_key=273df455c13daefb614b7a4b22047fd1";
const image_api = "https://image.tmdb.org/3/t/p/w500/";


function Movies({user}) {
    const [movies, setMovies] = useState([]);
    const navigate=useNavigate();

    if(!user){
        navigate("/")
    }

    useEffect(() => {
        axios.get(movie_api).then((response) => {
            setMovies(response.data.results);

            //    console.log(response.data.results)
        });

    }, [])

    return (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",backgroundColor:"#cf3030",paddingTop:"1rem"}}>
            {
                movies.map((movie) => {
                    return (
                        <div key={movie.id} style={{margin:"0.5rem"}} onClick={()=>(navigate(`/single/:${movie.id}`, {state: movie}))} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image_api+movie.poster_path} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:"18px"}}>{movie.title}</Card.Title>
                                    <Card.Text>Ratings:{" "} {movie.vote_average}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Movies
