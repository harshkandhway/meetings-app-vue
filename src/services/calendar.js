import axios from 'axios';
import Vue from 'vue';
// // import AppConfig from '@/config' 
// axios.defaults.headers['Authorization'] = localStorage.getItem('AppConfig.token');

// localStorage.setItem('AppConfig.token',AppConfig.token)

// const calendar = async () => {
//     try{
//     const response = await axios.get( `https://mymeetingsapp.herokuapp.com/api/calendar?date=2021-09-21` );
//     console.log(response.data);
//     return response.data;
//     } catch(error){
//         console.log(error);
//     }
// };

function calendar(credendial){
    // console.log(AppConfig.token)
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${credendial}`,{headers:{
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('token')
    }})
    .then((res)=>{
        return res.data
    }).catch((error)=>Vue.$toast.open({
        message: error,
        duration: 3000,
        type: 'error',
      }))
}


// async function calendar(credendial){
//     try {
//         const res = await axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${credendial}`);
//         return res.data;
//     } catch (error) {
//         return error;
//     }
// }

export{
    calendar
};