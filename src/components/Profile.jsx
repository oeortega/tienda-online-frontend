import './style/Profile.css'
import axios from 'axios';
// import SimpleModal from './DetailModal'
import React, { Component } from 'react';
import ProfileMenu from '../containers/ProfileMenu';


class Profile extends Component {
    constructor() {
        super();
        this.state={
            userData:[]
        }
    }
    componentDidMount() {
        var userId= localStorage.getItem('userId')
        axios.get(`https://ec2-34-214-197-252.us-west-2.compute.amazonaws.com/:3001/auth/${userId}`,
        {headers: {
            Accept : 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(user => {
                this.setState({
                    userData:user.data
                })
                localStorage.setItem('userName', this.state.userData.userName)
                console.log(user.data)
            })
            .catch(err => {

                 console.log(err)
                 localStorage.clear()

             })

        }   
    render() {
        if(localStorage.userId){
            var date=new Date(this.state.userData.createdAt)
            return(
               
                <div>
                    <ProfileMenu/>
                    <div className='profileContainer' >
                        <div className='titleTag'>
                            <h3>{this.state.userData.userName}'s Perfil</h3>
                        </div>
                        <div className='dataTag'>
                        <span className='Tag'>Nombre: </span><span className='data'>{this.state.userData.userName}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Correo: </span><span className='data'>{this.state.userData.email}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Direccion: </span><span className='data'>{this.state.userData.address}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Ciudad: </span><span className='data'>{this.state.userData.country}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>Tarjeta de credito: </span><span className='data'>{this.state.userData.creditcardNumber}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>C.C. tipo: </span>   <span className='data'>{this.state.userData.creditcardType}</span>
                        </div>
                        <div className='dataTag'>
                            <span className='Tag'>fecha de creacion: </span>   <span className='data'>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</span>
                        </div>   
                        
                    </div>
                   
                </div>
            )
            

        }
        else{
            return(
                <div className='profileContainer'>
                    <h4 className='data'>Lo sentimos, debe iniciar sesión para verificar su perfil</h4>
                </div>
            )
        }
    }
}
export default Profile;

