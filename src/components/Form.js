import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:""
    }
  }
  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]:value
    })
    console.log(value);
  }
  handleLogin = (event) => {
    event.preventDefault()
    let listLogin = {
      username:this.state.username,
      password: this.state.password
    }
    this.props.handleLogin(listLogin)
  }
  render() {
    return (
      <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />
                  Remember Me{" "}
                </label>
                <a className="form-recovery" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="form-group">
                <button onClick={this.handleLogin} type="button">Log In</button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}
