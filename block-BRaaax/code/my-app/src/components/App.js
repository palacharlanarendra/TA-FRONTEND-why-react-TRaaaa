function App() {
  return (
    <>
      <Button label='Button' />
      <Button size='small' label='Button' type='secondary' />
      <Button
        size='large'
        label='Button'
        type='tertiary'
        onClickHandler={() => alert('You Clicked Me!')}
      />
    </>
  );
}
function Button(props) {
  return (
    <>
      <button
        className={props.type}
        id={props.size}
        onClick={() => props.onClickHandler()}
      >
        {props.label}
      </button>
    </>
  );
}

export default App;
