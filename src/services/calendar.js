import axios from 'axios';

// import AppConfig from '@/config';

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoMTIzQGV4YW1wbGUuY29tIiwidXNlcklkIjoiNjE0NjNjZmQxMzgyMzgwMDE1NmJiMjFlIiwiaWF0IjoxNjMyMjQ4MDI2LCJleHAiOjE2MzIzMzQ0MjZ9.5xVFhaSI1Mls0IQ9cKKCYdWQ4lkcpdfOoFRT9ZHBi6k';


// const calendar = async () => {
//     try{
//     const response = await axios.get( `https://mymeetingsapp.herokuapp.com/api/calendar?date=2021-09-21` );
//     console.log(response.data);
//     return response.data;
//     } catch(error){
//         console.log(error);
//     }
// };

function calendar(date){
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${date}`)
    .then((res)=>{
        console.log(res)
        return res.data
    })
}

export{
    calendar
};