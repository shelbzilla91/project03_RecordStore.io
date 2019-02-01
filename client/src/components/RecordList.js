import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddRecordForm from './AddRecordForm';


const GeneralStyles = styled.div`
    text-align: center;
`
const ListStyles =styled.div
`
display:flex;
flex-direction:column;
justify-content:center;
text-align: center;
border: 5px solid blue;
width:100vw;

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
        this.setState({records: res.data})
        console.log(this.state.records)
    }

    toggleAddRecord = () => {
        this.setState({ addRecord: !this.state.addRecord})
    }

    render() {
      


        return (
            <GeneralStyles>
                <h1>Add Some New Tunes Dudes!</h1>
                <button className="btn btn-secondary btn-sm" onClick={this.toggleAddRecord}>Add Record</button>
                {this.state.addRecord ? <AddRecordForm
                    getUsers={this.getUsers}
                    toggleAddRecord={this.toggleAddRecord}
                    userId= {this.props.userId}
                    /> : null}
                    <div>
                {this.state.records.map((record, i) => {
                    return (
                        <div key={i}>
                        <Link to={`/users/${record._id}`}>
                        </Link>
                        <h3>{record.title}</h3>
                        <h3>{record.band}</h3>
                        <h3>{record.genre}</h3>
                        <h3>{record.img}</h3>
                        
                    </div>
                    )
                }
                    
                )}
                </div>
            </GeneralStyles>
           
        );
    }
}

export default RecordList;