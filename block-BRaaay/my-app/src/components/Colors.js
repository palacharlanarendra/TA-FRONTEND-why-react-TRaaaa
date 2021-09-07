import data from '../colors.json';

function Colors() {
  return (
    <div>
      {Object.keys(data).map((eachColor) => (
        <div key={eachColor}>
          <h2>{eachColor}</h2>
          <div className='flex'>
            <Color some={data[eachColor]} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Color(props) {
  return (
    <>
      {props.some.map((color) => (
        <div className='some' style={{ backgroundColor: color }}></div>
      ))}
    </>
  );
}
export default Colors;
