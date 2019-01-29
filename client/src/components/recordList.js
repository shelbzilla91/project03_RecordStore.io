import React, { Component } from 'react';
import records from './records'

class recordList extends Component {
    render() {
        return (
            <div>
                 {this.props.recordList.map((record, i) => {
          return (<recordList 
            key={i}
            recordName={records.name}
            recordBand={records.band}
            recordPrice={records.price}
            recordProduct={this.props.deleteRecord}
            recordId={i}
            showDelete={this.props.showDeleteOnRecords}
            showAdd={this.props.showAddOnRecords}
            addRecord={this.props.addRecord}
          />)
          })
        } 
            </div>
        );
    }
}

export default recordList;