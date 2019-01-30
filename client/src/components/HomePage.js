import React, { Component } from 'react';
import AddRecordForm from './AddRecordForm';
import RecordList from './RecordList';
import UserList from './UserList';

class HomePage extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                    <span class="badge badge-pill badge-primary"><h1>Wreck Records</h1></span>
                 
                     
                            {/* <img src = "http://vinylgif.com/gifs/201412/spinning-7-inch.gif" alt=""> */}
            
                </nav>
            

                <RecordList />
                <AddRecordForm />
                <UserList />

            </div>
        );
    }
}

export default HomePage;