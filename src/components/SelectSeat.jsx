import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'

export default function SelectSeat({user}) {
    const location = useLocation();
    const { name } = location.state;
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const navigate=useNavigate();
    if(!user){
        navigate("/")
    }
    // console.log(name);
    function createSeats() {
        let tempSeats = []
        const rows = 5;
        const cols = 8;
        let ch = 'A';
        let r = 0
        while (r < rows) {
            let tempArr = [];
            let c = 1;
            while (c <= 8) {

                tempArr.push(ch + c);
                c++;
            }
            tempSeats.push(tempArr);
            r++;
            ch = String.fromCharCode(ch.charCodeAt() + 1);


        }
        setSeats(tempSeats)

    }

    useEffect(() => {
        createSeats();

    }, []);
    // console.log(seats);
    function selected(newSeat) {
        setSelectedSeats([...selectedSeats, newSeat])
    }

    return (
        <div style={{ backgroundColor: "#cf3030", minHeight: "92.4vh", color: "white", }}>
            <div >
                <h3 style={{ padding: "1rem 8.5 rem" }}>{name}</h3>
                <div style={{ textAlign: "center" }} >Screen This Side</div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ margin: "1    rem " }}>
                    {

                        seats.map((seatsArr, index) => {
                            return (

                                <Row key={index} style={{ margin: "8px auto" }}>
                                    {
                                        seatsArr.map((seat, index) => {
                                            let isSelected = selectedSeats.indexOf(seat) > -1;
                                            return (
                                                <Col key={index} style={{ margin: "0.3rem auto" }}>
                                                    <Button onClick={() => { selected(seat) }} style={{ backgroundColor: isSelected ? "green" : "none", width: "120px", margin: "10px" }}>{seat}</Button>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>

                            )

                        })
                    }
                </div>
            </div>

            <div style={{ width: "80%", margin: " auto" }} >
                {
                    selectedSeats.length > 0 ?
                        <div>
                            {
                                selectedSeats.map((seat, index) => {
                                    return (
                                        <span key={index} style={{ padding: "5px" }} >{seat}</span>
                                    )
                                })
                            }
                            
                        
                            <span>Seats Selected</span>
                            <div style={{margin:"8px 0"}}> 
                                <h5>
                                    Total: Rs {selectedSeats.length * 200}
                                </h5>
                            </div>

                            <div>
                                <Button onClick={()=>navigate("/checkout")} style={{fontSize:"20px" ,fontWeight:"600"}}>Checkout</Button>
                            </div>


                        </div> : <div>No Seats Selected</div>

                    
                }
            </div>


        </div>
    )
}
