import React, { Component } from 'react';

class recordHolder extends Component {
    render() {
        return (
            <div>
         <h1>RECORDS</h1>
        <h2>TotalPrice: ${this.props.recordPrice}</h2>
        <recordList 
          recordList={this.props.recordList} 
          deleteProduct={this.props.deleteRecord} 
          
      />
            </div>
        );
    }
}

export default recordHolder;