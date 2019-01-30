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
        records: [],
        addRecord: false
    }

    componentWillMount() {
        this.getRecords()
    }

    getRecords = async () => {
        // console.log(this.props.match.params.theUserId)
        console.log('Hey Im a console log')
        const res = await axios.get(`/api/users/${this.props.theUserId}/records`)
        console.log('We did it')
        console.log(res)
        const data = res.data
        console.log(data)
    //     axios.get(`/api/users/${this.props.userId}/records`)
    //     .then((res) => {this.setState({ records: res.data })
    //     console.log(this.state.records)
    // })
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
                    getUsers={this.getUsers}
                    toggleAddRecord={this.toggleAddRecord}
                    /> : null}
                {this.state.records.map((record, i) => (
                    <div key={i}>
                        <Link to={`/users/${record._id}`}>
                        <h3>{record.name}</h3>
                        
                        
                        </Link>
                    </div>
                ))}
            </GeneralStyles>
           
        );
    }
}

export default recordList;