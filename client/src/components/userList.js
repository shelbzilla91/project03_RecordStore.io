import React, { Component } from 'react';
import axios from 'axios'
import AddUserForm from './addUserForm';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const GeneralStyles = styled.div`
    text-align: center;

`

class UserList extends Component {
    state = {
        users: [{}],
        addUserFormVisible: false
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(`/api/users`)
        .then((res) => this.setState({ users: res.data }))
    }

    toggleAddUserForm = () => {
        this.setState({ addUserFormVisible: !this.state.addUserFormVisible })
    }

    render() {
        return (
            <GeneralStyles>
                <h1>Hey from user view</h1>
                <button onClick={this.toggleAddUserForm}>Create new user</button>
                {this.state.addUserFormVisible ? <AddUserForm
                    getAllUsers={this.getAllUsers}
                    toggleAddUserForm={this.toggleAddUserForm}
                    /> : null}
                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/users/${user._id}`}><h3>{user.username}</h3></Link>
                    </div>
                ))}
            </GeneralStyles>
        );
    }
}

export default UserList;