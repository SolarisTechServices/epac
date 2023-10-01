import './App.css';
import Home from './Pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Events from './Pages/Events';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/events' element= {<Events/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
