import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Header from '../Components/Header';

function OutletMain() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const navigateHome = () => { if (pathname === '/hackathoran-2024/') navigate('/hackathoran-2024/home') };
    useEffect(navigateHome, [navigate, pathname]);
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}

export default OutletMain