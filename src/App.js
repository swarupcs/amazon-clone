import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    // BEM
    <div className='app'>
      <Header/>
      {/* <Home/> */}
      <Outlet/>
    </div>
  );
}

export default App;
