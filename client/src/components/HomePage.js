import React, { Component } from 'react';
import axios from 'axios'
import recordList from './recordList';

class HomePage extends Component {
    state = {
        recordList: [
            {
                band: "Fleetwood Mac",
                album: "Rumours",
                release: 1976,
                img:"https://www.abc.net.au/news/image/6879228-3x2-940x627.jpg",
                price:45.00,


            }
        ]}
        
    
    componentDidMount() {
        this.getState()
      }

    getState() {

        axios.get('/api/users')
            .then(newList => {

                let x = {
                    recordList: newList
                }

                this.setState(x);
            })

    }

    deleteRecord(id) {
        axios.delete('/api/users/' + id)
            .then(newList => {
                let x = {
                    recordList: newList
                }

                this.setState(x);
            })
    }

    addRecord = (newRec) => {

        let recList = this.state.recordList

        this.setState({
            recordList: recList
        })
    }
    deleteRecord = (recordId) => {
        let recList = this.state.recordList;

        recList.splice(recordId, 1);

        this.setState({
            recordList: recList
        })}
    

        render() {
            return (
              <div>
         
         <recordList
            
            recList={this.state.recordList}
            deleteRecord={this.deleteRecord}
          />

      <button onClick={this.getState}>Records </button>
   
        
              </div>
            );
          }
        }
        
        export default HomePage