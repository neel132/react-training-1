import { Component } from "react";
/**
 * State - State is mutable
 * 
 **/
class Home extends Component {
  constructor() {
    super();
    console.log("Constructor is called");
    this.state = {
      counter: 0,
      name: "XYZ",
    }
  }
  render() {
    console.log("Render is called");
    return (
      <p>Counter value - {this.state.counter}</p>
    )
  }
  componentDidMount() {
    console.log("Component did mount is called")
    setInterval(() => {
      this.setState({
        ...this.state,
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("Component unmount is called")
  }
}
export default Home;