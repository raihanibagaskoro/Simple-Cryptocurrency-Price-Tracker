import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Watchlist from './pages/Watchlist';
import './style/App.css';


function App() {
  
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  )
}

export default App