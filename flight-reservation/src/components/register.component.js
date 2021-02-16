import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {

    handlesSubmit = e => {

        e.preventDefault();

        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            confirm_password: this.confirmPassword
        };
        // console.log(data);

        axios.post('http://localhost:8000/register', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )


    };
    render() {
        return (
            <form onSubmit={this.handlesSubmit}>
                <h3> Sign Up</h3>

                <div className="form-group">

                    <label>First Name</label>

                    <input type="text" className="form-control" placeholder="First Name"
                        onChange={e => this.firstName = e.target.value}></input>

                </div>

                <div className="form-group">

                    <label>Last Name</label>

                    <input type="text" className="form-control" placeholder="Last Name"
                        onChange={e => this.lastName = e.target.value}></input>

                </div>

                <div className="form-group">

                    <label>Email</label>

                    <input type="email" className="form-control" placeholder="Email"
                        onChange={e => this.email = e.target.value}></input>

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <input type="password" className="form-control" placeholder="Password"
                        onChange={e => this.password = e.target.value}></input>

                </div>

                <div className="form-group">

                    <label>Confirm Password</label>

                    <input type="password" className="form-control" placeholder="Confirm Password"
                        onChange={e => this.confirmPassword = e.target.value}></input>

                </div>

                <button className="btn btn-primary btn-block"> Sign Up</button>
            </form>
        )
    }

}

