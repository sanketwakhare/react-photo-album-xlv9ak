import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './RootLayout.module.css';

const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
