import axios from 'axios'

export const logout = () =>{

    return axios
        .get('http://localhost:3001/auth/logout',
        {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }

        })
        .then(res => {
            console.log('Logout OK')
        })
}
