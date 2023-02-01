import React, { Component } from 'react'

export default class Rigister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      cpassword: "",
      email: ""
    }
  }
  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }
  handleRigister = () => {
    let listRigister = {
      username: this.state.username,
      password: this.state.password,
      cpassword: this.state.cpassword,
      email: this.state.email
    }
    let list = this.props.listUser
    let checkUserName = false
    let checkPassword = false
    for (let i = 0; i < list.length; i++) {
      if (list[i].username === this.state.username) {
        alert("ten dang nhap da ton tai")
      } else {
        checkUserName = true
      }
    }
    if (this.state.password.length <= 6 && this.state.password !== this.state.cpassword) {
      alert("mat khau khong hop le")
    } else {
      checkPassword = true
    }
    if (checkUserName&&checkPassword) {
      this.props.handleRigister(listRigister)
    }
    
  }

  render() {
    return (
      <div className="form-panel two">
        <div className="form-header">
          <h1>Register Account</h1>
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
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                required="required"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required="required" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <button onClick={this.handleRigister} type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
