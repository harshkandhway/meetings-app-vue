import axios from 'axios';

// import AppConfig from '@/config';

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoMTIzQGV4YW1wbGUuY29tIiwidXNlcklkIjoiNjE0NjNjZmQxMzgyMzgwMDE1NmJiMjFlIiwiaWF0IjoxNjMyNTYxMDczLCJleHAiOjE2MzI2NDc0NzN9.qiZuGRAUHDn1u2Bv1qoQPKIvFkRqqo735nJePVwsPfY';


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
    console.log(credendial)
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${credendial}`)
    .then((res)=>{
        // console.log(res)
        return res.data
    }).catch((error)=>error)
}

export{
    calendar
};