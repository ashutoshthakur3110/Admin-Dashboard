import {createBrowserRouter} from 'react-router'
import Layout from '../layout/Layout.jsx'
import AuthLayout from '../layout/AuthLayout.jsx'
import AdminDashboard from '../pages/Admin/AdminDashboard.jsx'
import EmployeeDashboard from '../pages/Employee/EmployeeDashboard.jsx'
import Login from '../pages/Auth/Login.jsx'
import Register from '../pages/Auth/Register.jsx'


export const routes = createBrowserRouter([{
    path:"/dashboard",
    element: <Layout/>,
    children:[
        {
            path: "/dashboard/admin",
            element: <AdminDashboard/>
        },
        {
            path: "/dashboard/employee",
            element: <EmployeeDashboard/>
        }
    ]
},
{
    path:"/",
    element:<AuthLayout/>,
    children:[
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/",
            element: <Register/>
        }
    ]
}
])