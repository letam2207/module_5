import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const HeaderComponent = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userStored = localStorage.getItem("user");
        if (userStored) {
            setUser(JSON.parse(userStored));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        toast.info("Đã đăng xuất thành công");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Football Manager</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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

                    {/* Phần hiển thị User / Logout */}
                    <div className="d-flex text-white align-items-center">
                        {user ? (
                            <>
                                <span className="me-3">Xin chào, <strong>{user.username}</strong></span>
                                <button onClick={handleLogout} className="btn btn-outline-light btn-sm">Đăng xuất</button>
                            </>
                        ) : (
                            <Link to="/login" className="btn btn-outline-light btn-sm">Đăng nhập</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;