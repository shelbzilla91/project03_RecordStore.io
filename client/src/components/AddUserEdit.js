import React, { Component } from 'react';
import axios from 'axios'

class AddUserEdit extends Component {
    state = {
        user: {
            username: '',
            password: '',
            email:'',
            img:''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }

    handleSubmit = (event) => {
    const userId= this.props.userId
        event.preventDefault()
        const result = this.state.user
        axios.patch(`/api/users/${userId}`, result)
        .then((res) => {
            this.props.getUsers()
            this.props.history.push(`/users/${userId}`) 
        })
    }

    
    

    render() {
        return (
            <div>
                <span class="badge badge-pill badge-primary"><h3>Edit User Page</h3></span>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="Password"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        name="password"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="Email"
                        value={this.state.user.email}
                        onChange={this.handleChange}
                        name="email"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="Profile Img"
                        value={this.state.user.img}
                        onChange={this.handleChange}
                        name="img"/>
                    </div>
                    <button>EDIT</button>
                    
                </form>
            </div>
        );
    }
}

export default AddUserEdit;