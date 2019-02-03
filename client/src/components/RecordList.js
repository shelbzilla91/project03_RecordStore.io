import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddRecordForm from './AddRecordForm';


const GeneralStyles = styled.div`
    text-align: center;
`
const UserImg = styled.img`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 25vw;
height:35vh;
border:5px solid red;
`
const RecImg = styled.div `
display:flex;
flex-direction:column;
justify-content:right;
align-items:center;
text-align:center;
width: 25vw;
height:25vh;
border:5px solid black;
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
                        <UserImg src={record.img} alt="..."/>
                        <RecImg>
                        <h3>{record.title}</h3>
                        <h3>{record.band}</h3>
                        <h3>{record.genre}</h3>
                        <h3>{record.price}</h3>
                        </RecImg>
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