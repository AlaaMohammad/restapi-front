import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AnimeCardsList from './components/AnimeCards/AnimeCardsList';
import PrivateRoutes from './Routes/PrivateRoutes';
import Home from './components/Pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<PrivateRoutes/>}>
        <Route element={<Dashboard/>} path='/dashboard' exact/>
      </Route>
      <Route path='/cards' element={<AnimeCardsList />} />
    </Routes>
  )
}

export default App
