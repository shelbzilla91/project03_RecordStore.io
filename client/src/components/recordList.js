import React, { Component } from 'react';

class recordList extends Component {
    render() {
        return (
            <div>
                 {this.props.recordList.map((record, i) => {
          return (<Record 
            key={i}
            recordName={record.name}
            recordBand={record.band}
            recordPrice={record.price}
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