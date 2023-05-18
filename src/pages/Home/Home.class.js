import { Component } from "react";
import Counter from "../../component/Counter";
/**
 * State - State is mutable
 * Props - Props is immutable
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
      <div>
        <center>
          <p>Counter value - </p>
          <Counter counterValue={this.state.counter} />
        </center>
      </div>

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