
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Football Manager</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/players">Danh sách cầu thủ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/players/create">Thêm mới</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;