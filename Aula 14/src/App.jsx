import ampharos from '../public/ampharos.png';

function App() {



  return(
    <div style = {{
      display: 'flex',
      flexDirection: 'row',
    }} >
      <img src = {ampharos} alt = "ampharos"
        style = {{
          width: '200px',
          height: '200px',
        }}
      ></img>
    </div>
    
  );
}

export default App;