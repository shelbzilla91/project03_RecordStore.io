import React, { Component } from 'react';
import UserList from './UserList';
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const WreckingBall = styled.img`
            width: 100px;
            height:100px;
`
const GenralStyles = styled.div `
background: linear-gradient(to left, #2193b0, #6dd5ed);
color:white;

`
const HeaderImg = styled.div `
background-image: url("https://image.freepik.com/free-photo/close-up-single-circular-vinyl-record-blue-background_23-2147926922.jpg");
background-size:cover;
`
const HeaderHolder = styled.div `
display:flex;
flex-direction:flex-end;
height:20vh;

`

class HomePage extends Component {

    render() {
        return (
            <GenralStyles>
            <div>
                
                <HeaderImg>
               
                <span class="badge badge-pill badge-primary"><h1>Wreck Records</h1></span>
                <HeaderHolder>
                <Slide right>
                <WreckingBall src="http://vinylgif.com/gifs/201412/spinning-7-inch.gif" alt="..."/>
                </Slide>
             
                <Bounce right>
                <h1>Building Community through Music</h1>
                </Bounce>

                </HeaderHolder>
                </HeaderImg>
                
                <nav class="navbar navbar-light bg-light">
                    <a class="nav-link active" href="/">Home</a>
                    <h1 className="card-text">BUY SELL VINYL</h1> 
               
                     
                    
            
                </nav>
        
                
                <UserList />

            </div>
            </GenralStyles>
        );
    }
}

export default HomePage;