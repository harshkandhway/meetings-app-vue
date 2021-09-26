import axios  from "axios";

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoMTIzQGV4YW1wbGUuY29tIiwidXNlcklkIjoiNjE0NjNjZmQxMzgyMzgwMDE1NmJiMjFlIiwiaWF0IjoxNjMyNjU3NTI4LCJleHAiOjE2MzI3NDM5Mjh9.hRBqr6CiN8g8RSSAPQIX-NG7wy19eh992lVQQgkfyzU';

function meetings(period,search){
    return axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${period}&search=${search}`)
    .then((res)=>{
        console.log(res.data);
        return res.data;
    }).catch(error=>error)
}

function addMeetings(){
    const config = {
        method: 'POST',
        url: 'https://mymeetingsapp.herokuapp.com/api/meetings',
        headers:{
            'Content-Type': 'application/json',
        },
        data: `{ "name": "Vue Workshop 16", 
        "description": "Web Dev", 
        "date": "2021-09-16", 
        "startTime": {"hours": 10,"minutes": 0},
        "endTime": {
            "hours": 12,
            "minutes": 30
        },
        "attendees": [
            {
                "userId": "123456789012345678901249",
                "email": "aravind@example.com"
            },
            {
                "userId": "123456789012345678901250",
                "email": "rupeshranjan123@gmail.com"
            },
             {
                "userId": "60b3bc005b1fc1001573c478",
                "email": "Shashi4@example.com"
            }
        ]
    }`
    }
    return axios(config).then((res)=>res.data)
    .catch(error=>error)
}


export{
    meetings,
    addMeetings
};