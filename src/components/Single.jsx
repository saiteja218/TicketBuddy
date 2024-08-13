import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
const image_api = "https://image.tmdb.org/3/t/p/w500/";
import axios from 'axios';
const timings = ["10:30", "2:30", "6:00", "9:00"];

function Single({user}) {
    const location = useLocation();
    const navigate=useNavigate();
    const { title, overview, backdrop_path, vote_average } = location.state;
    const [latLong, setLatLong] = useState({});
    const [theatres, setTheatres] = useState([]);
    // console.log(location.state)
    if(!user){
        navigate("/")
    }

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                setLatLong({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })

            })
        }
    }, [])
    // console.log(latLong);

    useEffect(() => {
        if (Object.keys(latLong).length > 0) {

            const map = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLong.long},${latLong.lat},50000&bias=proximity:79.2073703,18.0328315&limit=20&apiKey=d379995617904202a1e722593c724c99`;

            axios.get(map).then(res => {
                const featuresArr=res.data.features;
                const names = featuresArr
                .filter((feature) => feature.properties && feature.properties.name)
                .map((feature) => feature.properties.name);
                setTheatres(names);
                // console.log(names)
            })
        }
    }, [latLong])
   
    return (
        <div className='page-container'>
        <div style={{ backgroundColor: "#cf3030",  minHeight:"92.4vh", color: "white" }}>
            <div>
                {/* <Container > */}
                <Row className='mov-col'>
                    <Col>
                        <Card style={{ width: '23rem', margin: "5rem auto" }}>
                            <Card.Img variant="top" src={image_api + backdrop_path} style={{}} />
                            <Card.Body>

                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{overview} </Card.Text>
                                <Card.Text>Ratings:{' '}{vote_average} </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    
                        <div style={{margin:"5rem auto"}}>
                            {

                                theatres.map((theatre, index) => {
                                    return(
                                    
                                    <div key={index} style={{margin:"5px auto"}}>
                                        <h6>{theatre}</h6>
                                        <div style={{display:'flex',flexDirection:"row",flexWrap:"wrap"}}>
                                            <div>
                                        {timings.map((time,index)=>{
                                            return(
                                                // <div key={index} style={{}}>
                                                    <Button key={index} onClick={()=>{
                                                        navigate('/select', {state: {name:title}})
                                                    }} style={{width:"100px",margin:"0 5px"}}>{time}</Button>
                                                // </div>
                                            )
                                        })}
                                        </div>
                                        </div>

                                    </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
                {/* </Container> */}
            </div>
        </div >
        </div>
    )
}

export default Single
