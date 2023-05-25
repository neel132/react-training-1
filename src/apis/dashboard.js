import { axiosInstance } from "../config/axios";

const getDashboardData = async() => {
	try {
		const response = await axiosInstance.get('dashboard/home');
		console.log("Response inside api call =>", response);
		return response.data;
	} catch(e) {
		console.log("Error while calling an api -", e);
	}
}

export {getDashboardData};