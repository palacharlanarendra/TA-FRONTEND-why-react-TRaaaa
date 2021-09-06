import React from 'react';
import ReactDOM from 'react-dom';
import App, { ClassComponent, Fruits } from './components/App';
import './styles/style.css';
function All() {
  return (
    <>
      <App />
      <ClassComponent />
      <Fruits />
    </>
  );
}
ReactDOM.render(<All />, document.getElementById('root'));
