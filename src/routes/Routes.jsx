import { createBrowserRouter } from 'react-router-dom';

import { WebsiteLayout } from '../layout';
import { WebsiteRoutes } from './WebsiteRoutes';

const AppRouteList = [
  {
    path: '/',
    element: <WebsiteLayout />,
    children: WebsiteRoutes,
  },
];

const AppRouter = createBrowserRouter(AppRouteList);

export { AppRouteList, AppRouter };
