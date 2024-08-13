import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import logo from './assets/video-player.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

import { Routes, Route, useNavigate } from "react-router-dom"
import Movies from './components/Movies.jsx';
import Single from './components/Single.jsx';
import SelectSeat from './components/SelectSeat.jsx';
import CheckOut from './components/CheckOut.jsx';

function App() {
    const navigate = useNavigate();
    const [user,setUser]=useState("");

    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ticket Buddy
                    </Navbar.Brand>

                    <div>
                    {user && < Button onClick={()=>{navigate("/");localStorage.clear();setUser("")}}>LogOut</Button>}
                    </div>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Login setUser={setUser}/>} />
                <Route path='/login' element={<Login setUser={setUser}/>} />
                <Route path='/signup' element={<Signup setUser={setUser} />} />
                <Route path='/movies' element={<Movies user={user}/>} />
                <Route path='/single/:id' element={<Single user={user}/>} />
                <Route path='/select' element={<SelectSeat user={user}/>} />
                <Route path='/Checkout' element={<CheckOut user={user}/>} />

            </Routes>


        </div>
    )
}

export default App;
