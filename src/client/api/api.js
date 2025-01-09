import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true
})

export default {
	get(url) {
		return api.get(url);
	},
	post(url, data){
		return api.post(url, data);
	}
}