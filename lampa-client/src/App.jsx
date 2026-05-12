import './App.css';
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import DashLayout from './layouts/DashLayout';
import ArticlePage from './pages/LandingPages/ArticlePage';
import HomePage from './pages/LandingPages/HomePage';
import AboutPage from './pages/LandingPages/AboutPage';
import ArticleListPage from './pages/LandingPages/ArticleListPage';
import SignInPage from './pages/AuthPages/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage';
import DashboardPage from './pages/DashboardPages/DashboardPage';
import ReportsPage from './pages/DashboardPages/ReportsPage';
import UsersPage from './pages/DashboardPages/UsersPage';
import DashArticleListPage from './pages/DashboardPages/DashArticleListPage';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const type = localStorage.getItem('type');
  if (!type) return <Navigate to="/auth/signin" replace />;
  if (!allowedRoles.includes(type)) return <Navigate to="/dashboard" replace />;
  return element;
};

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'articles', element: <ArticleListPage /> },
      { path: 'articles/:name', element: <ArticlePage /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '', element: <DashboardPage /> },
      { path: 'reports', element: <ReportsPage /> },
      {
        path: 'articles',
        element: (
          <ProtectedRoute
            element={<DashArticleListPage />}
            allowedRoles={['admin', 'editor']}
          />
        ),
      },
      {
        path: 'users',
        element: (
          <ProtectedRoute
            element={<UsersPage />}
            allowedRoles={['admin']}
          />
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;