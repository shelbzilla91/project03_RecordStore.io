import React, { Component } from 'react';
import axios from 'axios'

class AddRecordForm extends Component {
    state = {
        records: {
            band:"",
            genre:"",
            name:"",
            img:""

        }
           
        
    }

    handleChange = (event) => {
        const newState = { ...this.state.records }
        newState[event.target.name] = event.target.value
        this.setState({ records: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const result = this.state.records
        axios.post(`/api/users/${this.props.userId}/records`, result)
        .then((res) => {
            this.props.getRecords()
            this.props.toggleAddRecordForm()
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
                        name="genre"
                        value={this.state.records.genre}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="Band"
                        name="band"
                        value={this.state.records.band}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="IMG URL"
                        name="img"
                        value={this.state.records.img}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
             );
        }
            
    }    
export default AddRecordForm;