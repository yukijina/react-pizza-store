import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import Error from './ui/Error';

// No need to set page not found. THere is a special way to set up.
const router = createBrowserRouter([
  {
    // No need to add path in parent(Layout route).
    element: <AppLayout />,
    // error for all invalid url
    errorElement: <Error />,
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
        // error for api loading. We want this error to be nested. So We add to this line as well
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      //Place: for id
      {
        path: 'order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
