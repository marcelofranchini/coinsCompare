import React, { useState, useEffect , useCallback} from 'react';
import { Button, Navbar } from 'react-bootstrap';
import  '../../bootstrap.min.css' ;
import './styles.css'
import { PersonPlus } from 'react-bootstrap-icons'


function Footer() {
    return(
        <div className='footer'> 
          <Navbar bg="dark" variant="dark" className='footer'>
            <Navbar.Brand className='footer'>
             <a  id='btnPlus'className=" btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.linkedin.com/in/marcelo-franchini-35a1bb19b/">
             <PersonPlus  size={18}/>
</a>
             <h6> Marcelo Franchini </h6>
            </Navbar.Brand>
          </Navbar>
        </div>
    )
}

export default Footer