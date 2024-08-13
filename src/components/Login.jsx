import React, { useState } from 'react'
import { Button, Card, CardBody, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login({setUser}) {
    const navigate=useNavigate();

    
    return (
        <div className='login-div'>
            <Container >
                <Row>
                    <Col style={{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}}>
                        <Card border='light' style={{width:"20rem",backgroundColor: "transparent",border:"2px solid"}}>
                            <CardBody>
                                <Form>
                                <div style={{paddingBottom:"10px"}}>
                                <Form.Label style={{color:"white"}}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                                </div>
                                <div style={{paddingBottom:"10px",marginBottom:"5px"}}>
                                <Form.Label style={{color:"white"}}>Enter Password</Form.Label>
                                <Form.Control type="password" placeholder="" />
                                </div>
                                <Button onClick={()=>{
                                    if(localStorage.getItem("Email")){
                                        setUser(localStorage.getItem("Email"));
                                        navigate("/movies");
                                    }else{
                                        alert("Your account doesn't exist!")
                                        navigate("/signup")
                                    }
                                }}>Login</Button>
                                </Form>

                                <p style={{marginTop:"1rem",marginBottom:"0",color:"white",fontSize:"0.85rem"}}>Don't have an account? <a onClick={()=>{navigate("/signup")}}>Signup</a></p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
