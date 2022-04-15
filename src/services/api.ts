import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://worldtrip-beta-five.vercel.app/api'
})