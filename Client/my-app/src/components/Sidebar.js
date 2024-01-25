import {Link} from 'react-router-dom';
import '../style/Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1 className="sidebar-title">Crypto Tracker</h1>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to="/" className="sidebar-link">Dashboard</Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/login" className="sidebar-link">Login</Link>
                </li>
            </ul>    
        </aside>
    )
}

export default Sidebar