import React, { Component } from 'react';

class records extends Component {

    deleteRecord = (event) => {
        this.props.deleteRecord(this.props.recordId);
      }
    
      addRecord = (event) => {
        this.props.addRecord(this.props.recordId);
      }
    
      render() {
        return (
          <div>
            <h1> { this.props.recordName }</h1>
            <p> { this.props.recordBand }</p>
            <p> { this.props.recordPrice } </p>
    
            { this.props.showDelete
              ? <button onClick={this.deleteRecord} > Delete </button>
              : null
            }
    
            { this.props.showAdd
              ? <button onClick={this.addRecord} > Add </button>
              : null
            }
                
            </div>
        );
    }
}

export default records;