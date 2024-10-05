import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/contact/contact'
import Home from './pages/home/home'
import TableView from './pages/table/table.view';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/table-view' element={<TableView />} />
    </Routes>
  );
};

export default App;
