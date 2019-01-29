import React, { Component } from 'react';
import axios from 'axios'
import AddUserForm from './AddUserForm';
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const GeneralStyles = styled.div`
    text-align: center;
`

class recordList extends Component {
    state = {
        records: [{}],
        addRecord: false
    }

    componentDidMount() {
        this.getRecords()
    }

    getRecords = () => {
        axios.get(`/api/users`)
        .then((res) => this.setState({ records: res.data }))
    }

    toggleAddRecord = () => {
        this.setState({ addRecord: !this.state.addRecord})
    }

    render() {
        return (
            <GeneralStyles>
                <h1>Hey from user view</h1>
                <button className="btn btn-secondary btn-sm" onClick={this.toggleAddUserForm}>Create new user</button>
                {this.state.addRecord ? <AddUserForm
                    getAllUsers={this.getAllUsers}
                    toggleAddRecord={this.toggleAddRecord}
                    /> : null}
                {this.state.records.map((record, i) => (
                    <div key={i}>
                        <Link to={`/users/${record._id}`}><h3>{record.name}</h3>
                        
                        
                        </Link>
                    </div>
                ))}
            </GeneralStyles>
           
        );
    }
}

export default recordList;