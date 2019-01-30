import React, { Component } from 'react';
import RecordList from './RecordList';
import AddRecordForm from './AddRecordForm'
import axios from 'axios'

class singleUser extends Component {
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
               <RecordList 
                theUserId={this.state.user._id}
               />
               <AddRecordForm />
            </div>
        );
    }
}

export default singleUser;