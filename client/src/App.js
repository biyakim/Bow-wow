import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {faPaw } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import './App.css'
import Abandoned from './abandoned/Abandoned';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './components/views/LoginPage/LoginPage';
import LandingPage from './components/views/LandingPage/LandingPage.js';
import RegisterPage from './components/views/RegisterPage/RegisterPage';


const App = () => {
    const [isopenMenu, setIsOpenMenu] = useState(false)

    const toggleBtn = () => {
      setIsOpenMenu(!isopenMenu);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_logo">
                    <a href=''>멍주인</a>
                </div>
                
                <ul className={`navbar_menu ${isopenMenu ? 'active' : ''}`}>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/abandoned">키워줘멍</Link></li> 
                    <li><Link to='/bow'>멍멍</Link></li> 
                    <li><Link to='/play'>놀자멍</Link></li> 
                    <li><Link to='/login'>로그인</Link></li> 
                </ul>

                <a href='#' className='navbar_toogleBtn' onClick={toggleBtn}>
                    <FontAwesomeIcon icon={faPaw} />
                </a>
            </nav>
            <hr/>
            
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>            
            <Route exact path="/abandoned" component={Abandoned}/>
            
        </div>
        
    )
}

export default App;
