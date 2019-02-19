import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm'


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Chat.io</h1>
                <RegisterForm/>
                {/* Link to List.js */}
                <Link to={'./list'}>
                    <button variant="raised">
                        My List
        </button>
                </Link>
            </div>
        );
    }
}
export default Home;