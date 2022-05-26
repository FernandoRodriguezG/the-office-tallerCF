import logo from './logo.svg';
import './App.css';
import Menu from './Components/menu';
import Home from './Components/home';
import Personajes from './Components/personajes';
import Citas from './Components/citas';
import Episodios from './Components/episodios';

function App() {
  const currentUrl = window.location.pathname
  function renderContent(){
    switch(currentUrl){
      case "/":
        return <Home/>
      break;
      case "/personajes":
        return <Personajes/>
      break;
      case "/citas":
        return <Citas/>
      break;
      case "/episodios":
        return <Episodios/>
      break;
    }
  }
  return (
    <div className="App">
      <Menu/>
      {
        renderContent()
      }
    </div>
  );
}

export default App;
