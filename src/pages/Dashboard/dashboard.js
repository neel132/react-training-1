import { useEffect } from "react"
import { getDashboardData } from "../../apis/dashboard";

const Dashboard = () => {
	useEffect(() => {
		fetchingData();
	}, []);
	const fetchingData = async () => {
		const response = await getDashboardData();
		console.log("response inside the dashboard component", response);
	}
	return (
		<h3>Dashboard Page</h3>
	)
}

export default Dashboard;