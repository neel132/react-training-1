const Counter = (props) => {
  const {counterValue, setCounter} = props;
  const renderEvenNumber = () => {
    return <p>I am an even number</p>
  }
  return (
    <>
    <p onClick={() => setCounter()}>Counter value - {counterValue}</p>
      {
        counterValue % 2 === 0 ? renderEvenNumber() : <p> I am an odd number</p>
      }
    </>
  )
}

export default Counter;