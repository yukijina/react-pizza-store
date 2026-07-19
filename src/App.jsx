import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';

// No need to set page not found. THere is a special way to set up.
const router = createBrowserRouter([
  {
    // No need to add path - parent. Layout route.
    element: <AppLayout />,
    // nested route. Also need to set Outlet in AppLayout to deplay children
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        // react route, once it goes to /menu url, it will load - fetch data
        loader: menuLoader,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      { path: 'order/:orderId', element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
