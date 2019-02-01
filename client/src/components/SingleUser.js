import React, { Component } from 'react';
import axios from 'axios'
import RecordList from './RecordList';
import AddUserEdit from './AddUserEdit';
import styled from 'styled-components'

const UserImg = styled.img`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 45vw;
    border:5px solid blue;


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
            console.log("this one",this.state.user._id)
        })
    }
    editUsers = () => {
        axios.get()
    }

    render() {
        console.log(this.props.match.params.userId)
        return (
            <div>
                <a class="nav-link active" href="/">Home</a>
                 <UserImg src={this.state.user.img} alt="..."/>      
                <span class="badge badge-pill badge-primary">{this.state.user.name}</span>
                <span class="badge badge-pill badge-primary">{this.state.user.username}</span>
                <span class="badge badge-pill badge-primary">{this.state.user.email}</span>
                
                <RecordList
                userId={this.props.match.params.userId}
                />
                
                <AddUserEdit 
                userId={this.props.match.params.userId}
                history={this.props.history}   
                getUsers={this.getUsers}             
                />
            </div>
        );
    }
}

export default SingleUser;