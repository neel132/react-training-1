import { useEffect, useState } from "react"
import Counter from "../../component/Counter";
import "./Home.css";
import styles from "./Home.style";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [userInput, setUserInput] = useState('');
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
	const onChangeText = (e) => {
		console.log("onChangeText is called", e.nativeEvent.target.value);
		// Using e.nativeEvent.target.value we receive the value change of input text.
		setUserInput(e.nativeEvent.target.value);
	}
	return (
		<div class="flex bg-cyan-400 h-screen">
			<div style={counter % 2 === 0 ? styles.containerForEven : styles.containerForOdd}>
					<Counter counterValue={counter} setCounter={settingCounter} />
					<input type="textarea" placeholder="Counter input" value={userInput} onChange={(e) => onChangeText(e)} />
			</div>
		</div>
	)
}
export default Home;