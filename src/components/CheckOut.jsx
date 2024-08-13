import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import popcorn from '../assets/p2.png'
import qr from '../assets/qr.jpg'
import bg from '../assets/ticket-buddy-bg.jpg'
import { useNavigate } from 'react-router-dom'

export default function CheckOut({user}) {
    const navigate=useNavigate();
    if(!user){
        navigate("/")
    }
    return (
        <div className='checkOut-div' style={{ color:"white" }}>
            
            <Row style={{bsgutterx: "0rem"}} >
                <Col style={{ display: "flex", justifyContent: "", alignItems: "center", flexDirection: "column" }}>

                <div style={{padding:"0.5rem 3rem"}}>
                < h1>Hooray!</h1>
                <h4>Your Tickets are booked.</h4>
                <img src={qr} alt="popcorn" style={{ height: "60vh",margin:"1.5rem 0" }} />
            </div>

                </Col>
                <Col >
                    
                </Col>
            </Row>

        </div>
    )
}
