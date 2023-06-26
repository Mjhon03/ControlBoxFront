import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import  OfficeInformation  from './Components/Pages/OfficeInformation/OfficeInformation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/office/:giroId' element={<OfficeInformation/>}/>
    </Routes>
  );
}

export default App;
