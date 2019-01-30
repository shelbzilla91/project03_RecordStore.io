import React, { Component } from 'react';

class singleUser extends Component {
    state = {
        users: [{}],
      
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get(`/api/users/:id`)
        .then((res) => this.setState({ users: res.data }))
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default singleUser;