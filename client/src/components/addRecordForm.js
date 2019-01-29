import React, { Component } from 'react';
import axios from 'axios'

class AddRecordForm extends Component {
    state = {
        record: {
            name: '',
            band: '',
            genre:'',
            price:'',
            img:''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.record }
        newState[event.target.name] = event.target.value
        this.setState({ record: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const result = this.state.user
        axios.post('/api/records', result)
        .then((res) => {
            this.props.getAllUsers()
            this.props.toggleAddUserForm()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder=" album name"
                        name="name"
                        value={this.state.record.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="password"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        name="password"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddRecordForm;