import { useEffect } from "react"
// import { getDashboardData } from "../../apis/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { dashboardData, requestDashboard } from "../../redux/slice/DashboardSlice";

const Dashboard = () => {
	const data = useSelector(dashboardData);
	console.log("Data inside component from redux saga=> ", data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestDashboard());
	}, [dispatch]);
	// const fetchingData = async () => {
	// 	const response = await getDashboardData();
	// 	console.log("response inside the dashboard component", response);
	// }
	return (
		<h3>Dashboard Page</h3>
	)
}

export default Dashboard;