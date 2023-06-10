import './App.css';
import Navbar from './Components/Navbar';
import Menus from './Components/Menus';
import Home from './Components/Home';
import Settings from './Components/Settings';
import Notifications from './Components/Notifications';
import Help from './Components/Help';
import User from './Components/User';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
 <BrowserRouter>
 <Navbar/><br/>
 <Routes>
 <Route path='/Menus' element={ < Menus /> } />
 <Route path='/Home' element={ < Home /> } />
 <Route path='/Settings' element={ < Settings /> } />
 <Route path='/Notifications' element={ < Notifications /> } />
 <Route path='/Help' element={ < Help /> } />
 <Route path='/User' element={ < User /> } />
 </Routes>
 </BrowserRouter>

 </>
  );
}

export default App;
