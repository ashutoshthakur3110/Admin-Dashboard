import { useRoutes, Navigate } from 'react-router'
import AuthLayout from '../layout/AuthLayout.jsx'
import Layout from '../layout/Layout.jsx'
import AdminDashboard from '../pages/Admin/AdminDashboard.jsx'
import EmployeeDashboard from '../pages/Employee/EmployeeDashboard.jsx'
import Login from '../pages/Auth/Login.jsx'
import Register from '../pages/Auth/Register.jsx'
import Form from '../pages/Admin/Form.jsx'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'

export const AppRoutes = () => {
  const { workAs, user } = useContext(AuthContext)
  console.log(workAs)
  console.log(user)

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: user ? <Layout /> : <Navigate to="/login" replace />,
      children: [
        {
          path: 'employee',
          element: workAs === 'employee' ? <EmployeeDashboard /> : <Navigate to="/login" replace />
        },
        {
          path: 'admin',
          element: workAs === 'admin' ? <AdminDashboard /> : <Navigate to="/login" replace />
        }
      ]
    },

    {
      path: '/',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '', element: <Register /> }
      ]
    },

    { 
      path: '/addForm', 
      element: user && workAs === 'admin' ? <Form /> : <Navigate to="/login" replace /> 
    }
  ])

  return routes
}
