import React, { Component } from 'react';
import UserList from './UserList';
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';

const WreckingBall = styled.img`
            width: 100px;
            height:100px;
`

class HomePage extends Component {

    render() {
        return (
            <div>
                <span class="badge badge-pill badge-primary"><h1>Wreck Records</h1></span>
                <Slide right>
                <WreckingBall src="http://vinylgif.com/gifs/201412/spinning-7-inch.gif" alt="..."/>
                </Slide>
                <nav class="navbar navbar-light bg-light">
                    <a class="nav-link active" href="/">Home</a>
               
                     
                    
            
                </nav>
        
                
                <UserList />

            </div>
        );
    }
}

export default HomePage;