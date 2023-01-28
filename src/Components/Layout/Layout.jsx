import { Suspense } from 'react';
import { Navigation } from 'Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import * as SC from './Layout.styled';

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
    </div>
  );
};
