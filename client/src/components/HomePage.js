import React, { Component } from 'react';
import UserList from './UserList';
import styled from 'styled-components'

const WreckingBall = styled.img`
            width: 100px;
            height:100px;
	        animation: rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
`

class HomePage extends Component {

    render() {
        return (
            <div>
                <span class="badge badge-pill badge-primary"><h1>Wreck Records</h1></span>
                <WreckingBall src="http://vinylgif.com/gifs/201412/spinning-7-inch.gif" alt="..."/>
                <nav class="navbar navbar-light bg-light">
                    <a class="nav-link active" href="/">Home</a>
               
                     
                           
            
                </nav>
        
                
                <UserList />

            </div>
        );
    }
}

export default HomePage;