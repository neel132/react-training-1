import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://646e3d879c677e23218b5a44.mockapi.io/api/v1/',
	timeout: 15000,
	headers: {},
});

axiosInstance.interceptors.request.use((config) => {
	console.log("Intercepting the request...");
	console.log("By default config, before intercepting the request", config);
	const token = "s4sa44as6f6";
	config.headers['Content-Type'] = 'application/json';
	if(token) {
		config.headers['Authorization'] = `Bearer ${token}`
	}
	return config;
})

axiosInstance.interceptors.response.use((config) => {
	console.log("Intercepting the response -", config);
	return config;
})

export {axiosInstance};