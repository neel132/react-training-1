import { useEffect } from "react"
// import { getDashboardData } from "../../apis/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { dashboardData, requestDashboard } from "../../redux/slice/DashboardSlice";
const dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const Dashboard = () => {
	const data = useSelector(dashboardData);
	console.log("Data inside component from redux saga=> ", data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestDashboard());
		console.time('calculate');
		calculate();
	}, [dispatch]);
	const calculate = () => {
		dataSet.map(v => console.log(v));
		console.timeEnd('calculate');
	}
	// const fetchingData = async () => {
	// 	const response = await getDashboardData();
	// 	console.log("response inside the dashboard component", response);
	// }
	return (
		<h3>Dashboard Page</h3>
	)
}

export default Dashboard;