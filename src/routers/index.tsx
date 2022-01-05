import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import PublicLayout from '../layout';

const Home = lazy(() => import('../views/home'));
const Detail = lazy(() => import('../views/detail'));

const routeList = [
    
    {
      path: '/main_window',
      element: <PublicLayout />,
      children: [
        {
          index: true, // 主路由
          element: <Home />,
        },
        {
            path: 'detail',
            element: <Detail />,
          },
    ]
}
]

const RenderRouter = () => {
    const element = useRoutes(routeList);
    return element;
};
  
  export default RenderRouter;