import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import SellIcon from '@mui/icons-material/Sell';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
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
                        <BedroomParentIcon className="icon2" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Available RealEstate</span>                        
                        </Link>
                    </li>
                    <li>
                        <SellIcon className="icon2" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>For Sell</span>                        
                        </Link>
                    </li>
                    <p className="title">SYSTEM</p>
                    <li>
                        <InsertChartIcon className="icon2" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Stats</span>                        
                        </Link>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon2" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Notifications</span>                     
                        </Link>   
                    </li>
                    <li>
                        <HealthAndSafetyIcon className="icon2" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>System Helath</span>                     
                        </Link>   
                    </li>
                    <li>
                        <PsychologyIcon className="icon2" />
                        <Link to="/" style={{ textDecoration: "none"}}>
                        <span>Logs</span>                        
                        </Link>
                    </li>
                    <li>
                        <SettingsIcon className="icon2" />
                        <Link to="/signin" style={{ textDecoration: "none"}}>
                        <span>Signup</span>                        
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