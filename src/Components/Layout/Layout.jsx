import { Suspense } from 'react';
import { Navigation } from 'Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import * as SC from './Layout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <div className="container">
      <SC.Wrap>
        <Navigation />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </SC.Wrap>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
