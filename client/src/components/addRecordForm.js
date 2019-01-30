import React, { Component } from 'react';
import axios from 'axios'

class AddRecordForm extends Component {
    state = {
        records: [{}],
           
        
    }

    handleChange = (event) => {
        const newState = { ...this.state.records }
        newState[event.target.name] = event.target.value
        this.setState({ records: newState })
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
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder=" Album Name"
                        name="name"
                        value={this.state.records.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="Genre"
                        value={this.state.records.genre}
                        onChange={this.handleChange}
                        name="genre"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="Band"
                        value={this.state.records.band}
                        onChange={this.handleChange}
                        name="band"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="IMG URL"
                        value={this.state.records.img}
                        onChange={this.handleChange}
                        name="img"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
             );
        }
            
    }    
export default AddRecordForm;