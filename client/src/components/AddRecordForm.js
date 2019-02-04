import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const RecForm = styled.div `

display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
align-content:center;
width: 25vw;
height:35vh;
border-radius: 5px;
border:5px solid #4286f4;
`

class AddRecordForm extends Component {
    state = {
        records: {
            band:"",
            genre:"",
            name:"",
            img:"",
            price:Number,

        }
           
        
    }
    getRecords = async () => {
        const res = await axios.get(`/api/users/${this.props.userId}/records`)
        console.log(res.data)
        this.setState({records: res.data})
        console.log(this.state.records)
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
           <RecForm>
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder=" Album Name"
                        name="name"
                        value={this.state.records.title}
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
                    <div>
                        <input type="number"
                        placeholder="Price"
                        name="price"
                        value={this.state.records.price}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
            </RecForm>
       
             );
        }
            
    }    
export default AddRecordForm;