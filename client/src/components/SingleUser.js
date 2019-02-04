import React, { Component } from 'react';
import axios from 'axios'
import RecordList from './RecordList';
import AddUserEdit from './AddUserEdit';
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const WreckingBall = styled.img`
            width: 100px;
            height:100px;
`
const RecFormHolder = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width: 50vw;
height:50vh;
border:5px solid blue;
`
const GenralStyles = styled.div `
background: linear-gradient(to left, #2193b0, #6dd5ed);
color:white;

`

const UserImg = styled.img`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 40vw;
    height:55vh;
    color:#2BDEDB;
    border:5px solid blue;
`
const RecList = styled.div `
display:flex;
flex-direction:row;
justify-content:right;
align-items:right;
width: 100vw;
height:150vh;
border:5px #55DBD9;
`
const Container = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:right;
width: 100vw;
height:230vh;
border:5px solid #4286f4;
`
const InfoContainer = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 30vw;
height:10vh;
background-color:#2BDEDB;
border:5px solid #4286f4;
`
const EditContainer = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 20vw;
height:10vh;
border:5px solid #4286f4;
`
const Holder = styled.div `
display:flex;
flex-direction: column;
align-items: center;

`

class SingleUser extends Component {
    state = {
        user: {},
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(`/api/users/${this.props.match.params.userId}`)
        .then((res) => {
            this.setState({ user: res.data })
            
        })
    }

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`)
            .then(() => this.props.history.goBack())
    }
  

    editUsers = () => {
        axios.get()
    }

    render() {
        console.log(this.props.match.params.userId)
        return (
            <GenralStyles>
            <div>
                
                <span class="badge badge-pill badge-primary"><h1>Wreck Records</h1></span>

                <Slide right>
                <WreckingBall src="http://vinylgif.com/gifs/201412/spinning-7-inch.gif" alt="..."/>
                </Slide>
                <Bounce right>
                <h1>Building Community through Music</h1>
                </Bounce>
                <nav class="navbar navbar-light bg-light">
                    <a class="nav-link active" href="/">Home</a>
 
                </nav>
                <Container><RecList>
                <Holder>
                <UserImg src={this.state.user.img} alt="..."></UserImg>  
                
                <InfoContainer>
                <span class="badge badge-pill badge-primary">{this.state.user.name}</span>
                <span class="badge badge-pill badge-primary">{this.state.user.username}</span>
                <span class="badge badge-pill badge-primary">{this.state.user.email}</span>
                </InfoContainer>
                </Holder>
               
              
                
                <RecFormHolder>
                <EditContainer>
                <AddUserEdit 
                userId={this.props.match.params.userId}
                history={this.props.history}   
                getUsers={this.getUsers}             
                />
                <div><button class="badge badge-pill badge-primary center" onClick={this.deleteUser}>Delete User</button></div>
                </EditContainer>
        
                </RecFormHolder>
                </RecList>
                <RecordList
                userId={this.props.match.params.userId}
                />
                
              </Container>
        
            </div>
            </GenralStyles>
            
        );
    }
}

export default SingleUser;