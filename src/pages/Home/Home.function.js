import { useEffect, useState } from "react"
import Counter from "../../component/Counter";
const Home = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		// useEffect is as same as componentDidMount, but it has other features as well
		console.log("Use Effect hook is called");
		return () => {
			// This will be triggered when the component dies or leaves the DOM
			// It acts same as componentWillUnmount
			console.log("Component unmount is called");
		}
	});
	// optional parameter is called as a dependency array
	console.log("Returning the UI Element");
	const settingCounter = () => {
		console.log("settingCounter is called " );
		setCounter(counter + 1)
	}
	return (
		<div>
			<center>
			<Counter counterValue={counter} setCounter={settingCounter} />
			</center>
		</div>
	)
}
export default Home;