import axios from 'axios';

const baseURL = 'https://crai-project-api-deploy.herokuapp.com/api';
export const apiConnection = axios.create({baseURL});
