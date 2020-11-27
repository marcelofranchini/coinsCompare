import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import  '../../bootstrap.min.css' ;
import './styles.css'

function JumbotronB() {
    return(

          <Jumbotron className='body'>
              
            <h1>Acompanhe seus BitCoins</h1>
            
            <p>
                <Button variant="dark" href="#cardH" >Veja Aqui</Button>
            </p>
            </Jumbotron>
        
    )
}

export default JumbotronB