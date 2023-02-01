import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Rigister from './components/Rigister';
import $ from 'jquery'
import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    $(document).ready(function () {
      var panelOne = $('.form-panel.two').height(),
        panelTwo = $('.form-panel.two')[0].scrollHeight;

      $('.form-panel.two').not('.form-panel.two.active').on('click', function (e) {
        e.preventDefault();

        $('.form-toggle').addClass('visible');
        $('.form-panel.one').addClass('hidden');
        $('.form-panel.two').addClass('active');
        $('.form').animate({
          'height': panelTwo
        }, 200);
      });

      $('.form-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('visible');
        $('.form-panel.one').removeClass('hidden');
        $('.form-panel.two').removeClass('active');
        $('.form').animate({
          'height': panelOne
        }, 200);
      });
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      listUser: []

    }
  }
  list = JSON.parse(localStorage.getItem('listUser'))
  handleRigister = (data) => {
    if (this.list == null) {
     this.list = []
    }
  this.setState({
    listUser:[...this.state.listUser,data]
  })
  localStorage.setItem('listUser',JSON.stringify(this.state.listUser))
  }

  handleLogin = (data) => {
    for (let i = 0; i < this.list.length; i++) {
      if (data.username == this.list[i].username && data.password == this.list[i].password) {
  alert("ban da dang nhap thanh cong")
} else {
  alert("tai khoan chua dang ky")
}  
    }
  }
  render() {
    return (
      <div className="App">
        <div className="form">
          <div className="form-toggle" />
          <Form handleLogin= {this.handleLogin}/>
          <Rigister listUser= {this.state.listUser} handleRigister={this.handleRigister} />
        </div>

      </div>
    )
  }
}




