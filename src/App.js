import './App.css';

//Atomes
import Header from './components/organism/header/Header';




function App() {

  const composants = [

    {
      label: "Home"
    },
    {
      label: "About"
    }
]


  return (
    <div className="App">
      <Header comp={composants} headerTitle={'Application Name'}/>
      
    </div>
  );
}

export default App;
