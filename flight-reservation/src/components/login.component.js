import React, { Component } from 'react';

export default class Login extends Component {

    render() {
        return (
            <form onSubmit={this.handlesSubmit}>
                <h3> Login</h3>

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


                <button className="btn btn-primary btn-block"> Login</button>
            </form>
        )
    }

} 