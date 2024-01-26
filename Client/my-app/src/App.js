import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Watchlist from './pages/Watchlist';
import Register from './pages/Register';
import './style/App.css';


function App() {
  
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App