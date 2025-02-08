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
	},
	patch(url, data){
		return api.patch(url, data);
	},
	delete(url, data){
		return api.delete(url, data);
	}
}