import { Outlet } from "react-router";
import AuthSidebar from "../components/AuthSidebar";

const AuthLayout = () => {
    return(
        <div>
        <AuthSidebar />
        <Outlet />
    </div>
    )
}

export default AuthLayout