import React, { Component } from 'react'
import { register } from './registerController'
import { Redirect } from 'react-router'


import './style/Register.css'



class Register extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            email: '',
            creditcardNumber: '',
            creditcardType: '',
            address: '',
            country: '',
            errors: {}

        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            creditcardNumber: this.state.creditcardNumber,
            creditcardType: this.state.creditcardType,
            address: this.state.address,
            country: this.state.country
        }

        register(newUser).then(res => {
            
            
                this.setState({
                    redirect:true
                })
            
        })
    }

    render() {
        if(!this.state.redirect){
        return (

            <div className='registerForm'>
                <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Registrar</h1>

                    <div className="formFields">
                        <label htmlFor="userName">Nombre</label>
                        <input
                            className="Register"
                            type="text"
                            name="userName"
                            placeholder="Enter en nombre o usuario"
                            value={this.state.userName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="formFields">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            className="Register"
                            type="text"
                            name="password"
                            placeholder="Enter en contraseña"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="formFields">
                        <label htmlFor="email">Correo</label>
                        <input
                            className="Register"
                            type="text"
                            name="email"
                            placeholder="Enter en correo"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="formFields">
                        <label htmlFor="address">Direccion</label>
                        <input
                            className="Register"
                            type="text"
                            name="address"
                            placeholder="Enter en direccion"
                            value={this.state.address}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="formFields">
                        <label htmlFor="country">Ciudad</label>
                        <select 
                        className="Register"
                        type="text"
                        name="country"
                        placeholder="selecione una ciudad"
                        value={this.state.country}
                        onChange={this.onChange}
                        >

                            <option>Valledupar</option>

                            <option>Santa marta</option>

                            <option>Barranqulla</option>

                        </select>
                    </div>
                    <div className="formFields">
                        <label htmlFor="creditcard_number">Numero de Tarjeta</label>
                        <input
                            className="Register"
                            type="text"
                            name="creditcardNumber"
                            placeholder="Enter en numero de tarjeta"
                            value={this.state.creditcardNumber}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="formFields">
                        <label htmlFor="creditcardType">Tipo de tarjeta</label>
                        <select 
                        className="Register"
                        type="text"
                        name="creditcardType"
                        placeholder="Enter a contraseña"
                        value={this.state.creditcardType}
                        onChange={this.onChange}>

                            <option>Mastercard</option>

                            <option>Visa</option>

                            <option>Maestro</option>

                        </select>
                    </div>

                    <button className="formButton"
                        type="submit"
                    >
                        Registrar
                            </button>
                </form>
    
            </div>

        )
        }else{
            return(
                <div>
                  <Redirect to="/login" />
                </div>
            )
        }
    }
}

export default Register