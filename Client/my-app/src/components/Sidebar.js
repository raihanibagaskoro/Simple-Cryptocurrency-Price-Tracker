import {Link, useNavigate} from 'react-router-dom';
import '../style/Sidebar.css';
import React, {useState, useEffect} from 'react';

const Sidebar = () => {
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setAccess(false);
        navigate('/');
        window.location.reload();
    };

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setAccess(true);
        }
    }, []);
    
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1 className="sidebar-title">Crypto Tracker</h1>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <Link to="/" className="sidebar-link">Dashboard</Link>
                </li>
                
                {access && (
                    <>
                        <li className="sidebar-item">
                            <Link to="/watchlist" className="sidebar-link">Watchlist</Link>
                        </li>
                        <li className="sidebar-item">
                            <Link onClick={handleLogout} className="sidebar-link">Logout</Link>
                        </li>
                    </>
                )}
                
                {!access && (
                    <div>
                        <li className="sidebar-item">
                            <Link to="/login" className="sidebar-link">Login</Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/register" className="sidebar-link">Register</Link>
                        </li>
                    </div>
                )}
                
            </ul>    
        </aside>
    )
}

export default Sidebar