import React, { Component } from 'react';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        alert('User email : ' + this.state.email);
        event.preventDefault();
        // posts user to database
        fetch('/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            })
        })
    }

    render() {
        return (
            <div>
                <p>Pick a username</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
                    <input type="text" value={this.state.password} name="password" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
export default RegisterForm;