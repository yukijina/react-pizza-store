import Header from './header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  // we use navagation to check loading status.
  // Status change to 'loading' when it fetch data
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === 'loading';

  return (
    <div className='layout'>
      {isLoading && <Loader />}

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
