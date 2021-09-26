import axios  from "axios";

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoMTIzQGV4YW1wbGUuY29tIiwidXNlcklkIjoiNjE0NjNjZmQxMzgyMzgwMDE1NmJiMjFlIiwiaWF0IjoxNjMyNjU3NTI4LCJleHAiOjE2MzI3NDM5Mjh9.hRBqr6CiN8g8RSSAPQIX-NG7wy19eh992lVQQgkfyzU';

function meetings(period,search){
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${period}&search=${search}`)
    .then((res)=>{
        console.log(res.data);
        return res.data;
    }).catch(error=>error)
}

export{
    meetings
};