import './App.css';

function App() {

  const clickHandler = async () => {
    try {
      const response = await fetch('http://51.250.11.157:8000/')
      let time = await response.text();
        const timeDiv = document.getElementById('moscow_time');
        timeDiv.innerHTML = time;
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="App">
      <button type="button" id="time" name="time" onClick={clickHandler}>Get moscow time</button>
      <div id="moscow_time"></div>
    </div>
  );
}

export default App;
