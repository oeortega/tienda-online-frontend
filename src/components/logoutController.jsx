import axios from 'axios'

export const logout = () =>{

    return axios
        .get('https://ec2-34-214-197-252.us-west-2.compute.amazonaws.com/:3001/auth/logout',
        {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }

        })
        .then(res => {
            console.log('Logout OK')
        })
}
