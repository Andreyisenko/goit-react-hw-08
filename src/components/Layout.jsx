import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';

const Layout = ({children}) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
        <Outlet />
    </div>
  );
};

export default Layout;
