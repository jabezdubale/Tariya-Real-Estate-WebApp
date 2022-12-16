import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import SellIcon from '@mui/icons-material/Sell';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar"> 
            <div className="top">
                <Link to="/" style={{ textDecoration: "none"}}>
                <span className="logo">tariya-realestate</span>
                </Link>
                
            </div>
         <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Dashboard</span> 
                        </Link>
                                               
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineIcon className="icon" />
                        <Link to="/users" style={{ textDecoration: "none"}}>
                        <span>Users</span> 
                        </Link>
                                               
                    </li>
                    <li>
                        <LocationCityIcon className="icon" />
                        <Link to="/realEstate" style={{ textDecoration: "none"}}>
                        <span>RealEstates</span>
                        </Link>                       
                    </li>
                    <li>
                        <BedroomParentIcon className="icon" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Available RealEstate</span>                        
                        </Link>
                    </li>
                    <li>
                        <SellIcon className="icon" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>For Sell</span>                        
                        </Link>
                    </li>
                    <p className="title">SYSTEM</p>
                                                            
                    <li>
                        <SettingsIcon className="icon" />
                        <Link to="/signin" style={{ textDecoration: "none"}}>
                        <span>Signin</span>                        
                        </Link>
                    </li>
                    <p className="title">ACCOUNT</p>
                    <li>
                        <AccountBoxIcon className="icon" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Profile</span>                        
                        </Link>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Logout</span>                        
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar