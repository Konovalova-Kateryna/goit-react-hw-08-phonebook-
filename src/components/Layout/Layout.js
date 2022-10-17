import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>loading.....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
