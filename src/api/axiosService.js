import axios from 'axios';
import { properties } from '../utils/properties';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = properties.host;

axiosClient.defaults.headers = properties.headers;

axiosClient.defaults.timeout = 10000;

export default axiosClient;