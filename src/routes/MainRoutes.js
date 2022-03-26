import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// batches page routing
// const BatchPage = Loadable(lazy(() => import('views/batches-page')));
const BatchPage = Loadable(lazy(() => import('views/batches-page/index')));

// application - user cards & list variant routing
const AppProfileCardStyle3 = Loadable(lazy(() => import('views/application/users/card/CardStyle3')));

// alternate course timeline
// const CourseOutline = Loadable(lazy(() => import('views/course-page/AlternateTimeline')));
const CourseOutline = Loadable(lazy(() => import('views/course-page/CustomizedTimeline')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/user/card/card3',
            element: <AppProfileCardStyle3 />
        },
        {
            path: '/batches-page',
            element: <BatchPage />
        },
        {
            path: '/course-page',
            element: <CourseOutline />
        }
    ]
};

export default MainRoutes;
