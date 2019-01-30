import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddRecordForm from './AddRecordForm';




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
        .then((res) => {this.setState({ records: res.data })

        console.log(this.getRecords)})
    }

    toggleAddRecord = () => {
        this.setState({ addRecord: !this.state.addRecord})
    }

    render() {
        return (
            <GeneralStyles>
                <h1>Add Some New Tunes Dudes!</h1>
                <button className="btn btn-secondary btn-sm" onClick={this.toggleAddUserForm}>Add Record</button>
                {this.state.addRecord ? <AddRecordForm
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