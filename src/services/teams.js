import axios from 'axios';
import token from '@/config' 
axios.defaults.headers.common['Authorization'] = token;

function teams(){
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/teams`)
    .then(res=>{
        return res.data;
    }).catch(error=>error)
}

export{
    teams
}