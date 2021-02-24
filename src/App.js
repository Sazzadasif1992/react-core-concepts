import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Md . Sazzadur Rahuman",
    job: "Teacher"
  }
  var person2 = {
    name: "Eva Rahman",
    job: "Singer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Users></Users>

      <Person name="Rubel Hossain" food="fuska"></Person>
      <Person name="hasan reza" food="fuska"></Person>
      <Person name="forhad Hossain" food="chese"></Person>
      <Person name="azad vai" food="funta"></Person>
      </header>
    </div>
  );
}
function Person (props){
  const personStyle = {
    border: '2px solid red',
    padding: '20px',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>{props.name}</h1>
      <h3>{props.food}</h3>
    </div>
  )
  
}
function Users(){
  return(
    <div>
      <h3>Dynamic Users</h3>
    </div>
  )
}
export default App;
