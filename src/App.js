import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import HomePage from './pages/HomePage';
import RegistePage from './pages/RegistePage'
import ContactPage from './pages/ContactPage'

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/register' element={<RegistePage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
