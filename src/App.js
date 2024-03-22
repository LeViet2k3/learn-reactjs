// import './App.css';
import AlbumFeature from './features/Album/pages';

function App() {
  // const name = 'Le Van Viet'
  // const age = 20;
  // const isMale = true;
  // const student = {
  //   name: 'Easy Frontend'
  // };
  // const colorList = ['red', 'blue', 'green'];
  return (
    <div className="App">
      {/* <TodoFeature /> */}


      <AlbumFeature />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lê Việt
        </p>

        <p>Xin Chao {name} - {age}- {isMale ? 'Male' : 'Female'}</p>
        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}


        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li key={color} style={{ color }}>{color}</li>
          ))}
        </ul>
      </header> */}
    </div>
  );
}

export default App;
