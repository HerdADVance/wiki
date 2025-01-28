// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8000/api',
//   withCredentials: true
// })


// const methods = ['request', 'get', 'delete', 'head', 'options', 'post', 'put', 'patch'];
// methods.forEach(method => {
//   api[method] = axios[method].bind(api);
// });

// export default {
// 	get(url) {
// 		return api.get(url);
// 	},
// 	post(url, data){
// 		return api.post(url, data);
// 	},
// 	patch(url, data){
// 		return api.patch(`${api.defaults.baseURL}${url}`, data, { withCredentials: true });
// 		//return api.patch(url, data)
// 	}
// }