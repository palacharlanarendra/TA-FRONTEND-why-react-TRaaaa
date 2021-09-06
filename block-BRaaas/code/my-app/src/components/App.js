import React, { Component } from 'react';
function handleAlert() {
  alert('Hello React Event');
}
function handleClick() {
  alert(`To learn React use 'https://reactjs.org'`);
  alert(`React and ReactDOM works together`);
  alert(`Babel helps in writing JSX`);
}
function showName(name) {
  alert(`Hello ${name}`);
}
function App(props) {
  return (
    <>
      <input type='submit' value='Click Me' onClick={handleAlert} />
      <input type='submit' value='How can I help you?' onClick={handleClick} />
      <input
        type='submit'
        value='Hello Arya'
        onClick={() => showName('Arya')}
      />
      <input
        type='submit'
        value='Hello John'
        onClick={() => showName('John')}
      />
      <input
        type='submit'
        value='Hello Bran'
        onClick={() => showName('Bran')}
      />
    </>
  );
}

export class ClassComponent extends Component {
  render() {
    return (
      <>
        <input
          type='submit'
          value='Hello Arya'
          onClick={() => this.showClassName('Arya')}
        />
        <input
          type='submit'
          value='Hello John'
          onClick={() => this.showClassName('John')}
        />
        <input
          type='submit'
          value='Hello Bran'
          onClick={() => this.showClassName('Bran')}
        />
      </>
    );
  }
  showClassName(name) {
    alert(`Hello ${name}`);
  }
}
let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];
function showFruitName(props) {
  alert(`${props.props.id}`);
}
function Fruit(props) {
  return (
    <>
      <input
        type='submit'
        value={props.value}
        onClick={() => showFruitName({ props })}
      />
    </>
  );
}
export function Fruits() {
  return (
    <>
      {fruits.map((eachFruit) => (
        <Fruit key={eachFruit.id} {...eachFruit} />
      ))}
    </>
  );
}
export default App;
