import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue, selectValue } from "../../redux/slice/CounterSlice";

const About = () => {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();
  console.log("Count -", count);
  return (
    <>
      <h3>Counter value - {count}</h3>
      <p onClick={() => dispatch(increment())}>Increment</p>
      <p onClick={() => dispatch(decrement())}>Decrement</p>
      <p onClick={() => dispatch(incrementByValue(10))}>Increment by 10</p>
    </>
  )
}

export default About;