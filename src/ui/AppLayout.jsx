import Header from './header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>AppLayout Content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
