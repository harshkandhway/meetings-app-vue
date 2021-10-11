import axios from 'axios';
// import AppConfig from '@/config' 
// import { config } from 'vue/types/umd';
// axios.defaults.headers.common['Authorization'] = AppConfig.token;

function login(credentials){
    const config = {
        method: 'POST',
        url: 'https://mymeetingsapp.herokuapp.com/api/auth/login',
        headers:{
            'Content-Type': 'application/json',
        },
        data: credentials
    }
    return axios(config).then((res)=>res.data)
    .catch(error=>error)
}

function signUp(credentials){
    const config={
        method: 'POST',
        url: 'https://mymeetingsapp.herokuapp.com/api/auth/register',
        data: credentials
    }
    return axios(config).then(res=>res.data)
    .catch(()=>{alert("Invalid password, Please use Uppercase, lowercase and special character")})
}

export{
    login,signUp
}