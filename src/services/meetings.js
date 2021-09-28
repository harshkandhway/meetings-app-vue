import axios  from "axios";
import token from '@/config' 
axios.defaults.headers.common['Authorization'] = token;

function meetings(period,search){
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${period}&search=${search}`)
    .then((res)=>{
        console.log(res.data);
        return res.data;
    }).catch(error=>error)
}

function addMeetings(form){
    const config = {
        method: 'POST',
        url: 'https://mymeetingsapp.herokuapp.com/api/meetings',
        headers:{
            'Content-Type': 'application/json',
        },
        data: form
    }
    return axios(config).then((res)=>res.data)
    .catch(error=>error)
}

function getUsers(){
    return axios.get('https://mymeetingsapp.herokuapp.com/api/users')
    .then((res)=>{
        return res.data;
    }).catch((error)=>error)
}


export{
    meetings,
    addMeetings,
    getUsers
};