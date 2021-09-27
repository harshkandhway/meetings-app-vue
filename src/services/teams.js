import axios from 'axios';
import token from '@/config' 
axios.defaults.headers.common['Authorization'] = token;