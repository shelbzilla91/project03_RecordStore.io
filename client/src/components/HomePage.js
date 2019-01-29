import React, { Component } from 'react';

class HomePage extends Component {

    render() {
        return (
            <div>
                <h1>Hello, welcome to the landing page!</h1>
                <Link to="/users">
                    <button>Log In</button>
                </Link>

            </div>
        );
    }
}

export default HomePage;