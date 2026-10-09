import { Outlet } from "react-router";
import AuthSidebar from '../components/AuthSidebar.jsx'

const AuthLayout = () =>{
    return(
        <div>
            <AuthSidebar/>
            <Outlet/>
        </div>
    )
}

export default AuthLayout