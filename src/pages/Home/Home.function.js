import { useEffect, useState } from "react"
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
	return (
		<p onClick={() => setCounter(counter + 1)}>Counter value - {counter}</p>
	)
}
export default Home;