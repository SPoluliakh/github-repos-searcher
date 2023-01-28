// import { Container } from '@mui/material';
import { Navigation } from 'Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import * as SC from './Layout.styled';

export const Layout = () => {
  return (
    <div className="container">
      <SC.Wrap>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </SC.Wrap>
    </div>
  );
};
