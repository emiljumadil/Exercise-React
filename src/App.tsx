import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/contact/contact'
import Home from './pages/home/home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default App;
