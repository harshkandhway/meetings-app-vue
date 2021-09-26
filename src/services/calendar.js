import axios from 'axios';

// import AppConfig from '@/config';

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoMTIzQGV4YW1wbGUuY29tIiwidXNlcklkIjoiNjE0NjNjZmQxMzgyMzgwMDE1NmJiMjFlIiwiaWF0IjoxNjMyNjU3NTI4LCJleHAiOjE2MzI3NDM5Mjh9.hRBqr6CiN8g8RSSAPQIX-NG7wy19eh992lVQQgkfyzU';


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