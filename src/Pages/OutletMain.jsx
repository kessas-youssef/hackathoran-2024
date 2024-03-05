import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Header from '../Components/Header';

function OutletMain() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const navigateHome = () => { if (pathname === '/') navigate('/home') };
    useEffect(navigateHome, [navigate, pathname]);
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}

export default OutletMain