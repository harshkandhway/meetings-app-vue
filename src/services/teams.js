import axios from 'axios';
import token from '@/config' 
axios.defaults.headers.common['Authorization'] = token;

function teams(){
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/teams`)
    .then(res=>{
        return res.data;
    }).catch(error=>error)
}

function addTeam(form){
    const config = {
        method: 'POST',
        url: 'https://mymeetingsapp.herokuapp.com/api/teams',
        headers:{
            'Content-Type': 'application/json',
        },
        data: form
    }
    return axios(config).then((res)=>res.data)
    .catch(error=>error)
}

export{
    teams,
    addTeam
}