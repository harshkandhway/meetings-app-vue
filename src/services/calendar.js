import axios from 'axios';

// import AppConfig from '@/config';


const calendar = async () => {
    const response = await axios.get( `https://mymeetingsapp.herokuapp.com/api/calendar?date=2021-09-21` );
    return response.data;
    console.log(response.data);
};