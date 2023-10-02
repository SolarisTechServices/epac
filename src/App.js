import './App.css';
import Home from './Pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Events from './Pages/Events';
import Team from './Pages/Team';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/events' element= {<Events/>}/>
        <Route exact path='/team' element= {<Team/>}/>
        <Route exact path='/gallery' element= {<Gallery/>}/>
        <Route exact path='/contact' element= {<Contact/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
