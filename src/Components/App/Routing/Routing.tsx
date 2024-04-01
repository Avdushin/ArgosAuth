import { createBrowserRouter } from 'react-router-dom';
import { Paths } from './Providers/types/Paths';
import { Layout } from '../../Layouts/Layout';
import { LoginPage, NotFound, RegisterPage } from '../../../Pages';
import { AuthGuard } from './Providers/AuthGuard';
import { Account, Home } from '../..';

const Routing = () => {
  return createBrowserRouter([
    {
      //@ Routes with Sidebar and global Container
      element: <Layout showSidebar={true} noContainer={false} />,
      errorElement: <NotFound />,
      children: [
        {
          path: Paths.Home || Paths.Root,
          element: (
            <AuthGuard>
              <Home />
            </AuthGuard>
          ),
        },
        {
          path: Paths.Account,
          element: (
            <AuthGuard>
              <Account />
            </AuthGuard>
          ),
        },
        {
          path: Paths.Signup,
          element: <RegisterPage />,
        },
        {
          path: Paths.Login,
          element: <LoginPage />,
        },
      ],
    },
  ]);
};

export default Routing;
