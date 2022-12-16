import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    
                    
                    <div className="item">
                        <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="avatar"
                        />
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Navbar