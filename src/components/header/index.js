import React, { useState, useEffect , useCallback} from 'react';
import { Button, Navbar } from 'react-bootstrap';
import  '../../bootstrap.min.css' ;
import './styles.css'
import icon from '../../assets/icon.png'

function Header() {
    return(
        <div > 
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className='bar'>
               <img
                alt=""
                src={icon}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Coins Compare
            </Navbar.Brand>
          </Navbar>
        </div>
    )
}

export default Header