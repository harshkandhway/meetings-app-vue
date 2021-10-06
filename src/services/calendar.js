import axios from 'axios';
import AppConfig from '@/config' 
axios.defaults.headers.common['Authorization'] = AppConfig.token;

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
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${credendial}`)
    .then((res)=>{
        return res.data
    }).catch((error)=>error)
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