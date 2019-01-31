import React, { Component } from 'react';
import axios from 'axios'
import RecordList from './RecordList';

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

    render() {
        return (
            <div>
                {this.state.user.name}
                {this.state.user.email}
                <RecordList userId={this.props.match.params.userId}/>
            </div>
        );
    }
}

export default SingleUser;