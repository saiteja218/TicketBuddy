import React, { useState } from 'react'
import { Button, Card, CardBody, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Signup({setUser}) {
    const navigate=useNavigate();
    const [email,setEmail] =useState("");
    return (
        <div className='login-div'>
            <Container >
                <Row>
                    <Col style={{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}}>
                        <Card border='light' style={{width:"22rem",backgroundColor: "transparent",border:"2px solid"}}>
                            <CardBody>
                                <Form>
                                <div style={{paddingBottom:"10px"}}>
                                <Form.Label style={{color:"white"}}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com"  onChange={(e)=>{setEmail(e.currentTarget.value)}} />
                                </div>
                                <div style={{paddingBottom:"10px",marginBottom:"5px"}}>
                                <Form.Label style={{color:"white"}}>Enter Password</Form.Label>
                                <Form.Control type="password" placeholder="" />
                                </div>
                                <div style={{paddingBottom:"10px",marginBottom:"5px"}}>
                                <Form.Label style={{color:"white"}}>Re-Enter Password</Form.Label>
                                <Form.Control type="password" placeholder="" />
                                </div>
                                <Button onClick={()=>{
                                    if(email){
                                    localStorage.setItem("Email",email)
                                    setUser(email);
                                        navigate("/movies")
                                    
                                }
                                else{
                                    alert("Email & password cannot be empty!")
                                }
                                }}>Signup</Button>
                                </Form>

                                <p style={{marginTop:"1rem",marginBottom:"0",color:"white",fontSize:"0.85rem"}}>Already have an account? <a onClick={()=>{navigate("/login")}}>Login</a></p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
