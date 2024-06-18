import axios from 'axios'
import { Redirect, BrowserRouter, Switch } from 'react-router-dom';

export const login = loginUser =>{
    return axios
        .post('https://ec2-34-214-197-252.us-west-2.compute.amazonaws.com/:3001/auth/login',{
            email: loginUser.email,
            password: loginUser.password
        })
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user.id)
            localStorage.setItem('role', res.data.user.roleId)
            const cart=[]
            localStorage.setItem('cart',JSON.stringify(cart) )
            
            console.log('Login OK')
           
        })
        .catch(err=> console.log(err)
        )
}

