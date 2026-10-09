import {Outlet} from 'react-router'
import Sidebar from '../components/Sidebar.jsx'

const Layout = () =>{
    return(
        <div>
            <Sidebar/>
        <Outlet/>
        </div>
    )
}

export default Layout