import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddRecordForm from './AddRecordForm';


const GeneralStyles = styled.div`
    text-align: center;
`

class RecordList extends Component {
    state = {
        records: [],
        addRecord: false
    }

    componentDidMount() {
        this.getRecords()
    }

    getRecords = async () => {
        console.log('hello')
        const res = await axios.get(`/api/users/${this.props.userId}/records`)
        console.log(res.data)
    }

    toggleAddRecord = () => {
        this.setState({ addRecord: !this.state.addRecord})
    }

    render() {

      // const records = this.state.records.map((record, i) => {
      //   return (
      //     <div>
      //       {record.name}
      //     </div>
      //   )
      // })

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

export default RecordList;