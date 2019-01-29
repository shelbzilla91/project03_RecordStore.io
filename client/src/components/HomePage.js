import React, { Component } from 'react';
import axios from 'axios'

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
        ],
        
    
    }

    getState() {

        axios.get('/recordList')
            .then(newList => {

                let x = {
                    recordList: newList
                }

                this.setState(x);
            })

    }

    deleteRecord(id) {
        axios.delete('/record/' + id)
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
         
        
              </div>
            );
          }
        }
        
        export default HomePage