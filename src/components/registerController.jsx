import axios from 'axios'

export const register = newUser =>{
    console.log("entra aqui")
    return axios
        .post('https://ec2-34-214-197-252.us-west-2.compute.amazonaws.com/:3001/auth/register',{
            userName: newUser.userName,
            password: newUser.password,
            email: newUser.email,
            creditcardNumber: newUser.creditcardNumber,
            creditcardType: newUser.creditcardType,
            address: newUser.address,
            country: newUser.country
        })
        .then(res => {
            console.log('Register OK')
        })
}

