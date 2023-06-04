import React, { Component } from 'react'
import { login } from './loginController'
import { Redirect } from 'react-router'
import './style/Login.css'
import { FaUser } from 'react-icons/fa';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {},
            redirect: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const loginUser = {
            password: this.state.password,
            email: this.state.email,
        }

        login(loginUser).then(res => {
            console.log(res)
            this.setState({
                redirect:true
            })
        })
    }

    render() {
        if (!localStorage.getItem('token') && this.state.redirect === false) {
          return (
            <div className='loginForm'>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="headerContainer">
                  <h1 className="loginHeader">
                    <FaUser className="userIcon" />
                    LOGIN
                  </h1>
                </div>
                <div className="formFields">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    className="Login"
                    type="text"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="formFields">
                  <label htmlFor="password">Password</label>
                  <input
                    className="Login"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <button className="formButton" type="submit">
                  Login
                </button>
              </form>
            </div>
          );
        } else if (!localStorage.getItem('token') && this.state.redirect === true) {
          return (
            <div className='loginForm'>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="headerContainer">
                  <h1 className="loginHeader">
                    <FaUser className="userIcon" />
                    LOGIN
                  </h1>
                </div>
                <h5>Sorry, User email or Password not correct, try again</h5>
                <div className="formFields">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    className="Login"
                    type="text"
                    name="email"
                    placeholder="Enter your e-mail"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="formFields">
                  <label htmlFor="password">Password</label>
                  <input
                    className="Login"
                    type="text"
                    name="password"
                    placeholder="Enter a password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <button className="formButton" type="submit">
                  Login
                </button>
              </form>
            </div>
          );
        } else {
          return (
            <div>
              <Redirect to="/profile" />
            </div>
          );
        }
      }
      
    
    }
export default Login