import "./widget.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import SellIcon from '@mui/icons-material/Sell';
import useAxios from "axios-hooks";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Widget = ({type}) => {

    const dataUser = useAxios("https://tariya-real-estate.herokuapp.com/api/account/list")
    const userCounter = dataUser[0]?.data?.length;

    const dataRs = useAxios("https://tariya-real-estate.herokuapp.com/api/realestate/list")
    const rsCounter = dataRs[0]?.data?.length;
    let rsSoldRs = 0;
    let rsAvailRs = 0;
    
    dataRs[0]?.data?.forEach(sold => {
        if (sold.houseStatus==="Sold") return rsSoldRs++;
    });

    dataRs[0]?.data?.forEach(Avail => {
        if (Avail.houseStatus==="Available") return rsAvailRs++;
    });


 
    let data2; 
 
    switch(type){
        case "Users":
            data2={
                title:"USERS",
                counter: dataUser[0].error ? <p style={{fontSize: "14px", fontWeight: "300"}}> Can't Fetch Data: {dataUser[0].error.message} </p> : dataUser[0].loading ? <Box sx={{display: "flex"}}><CircularProgress /></Box> : userCounter,  
                link:"View all users",
                icon: <PersonOutlineOutlinedIcon className="icon" style={{color:"crimson", backgroundColor: "rgba(255, 0, 0, 0.2",}}/>,
                linkto:"/users",
            };
            break;

            case "RealEstates":
            data2={
                title:"ALL REALESTATES",
                counter: dataRs[0].error ? <p style={{fontSize: "14px", fontWeight: "300"}}> Can't Fetch Data: {dataRs[0].error.message} </p> : dataRs[0].loading ? <Box sx={{display: "flex"}}><CircularProgress /></Box> : rsCounter,
                link:"View all RealEstates",
                icon: <LocationCityIcon className="icon" style={{color:"goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2",}}/>,
                linkto:"/realEstate",
            };
            break;

            case "SoldRS":
            data2={
                title:"SOLD REALESTATES",
                counter: rsSoldRs,
                link:"View All Sold RealEstates",
                icon: <SellIcon className="icon" style={{color:"green", backgroundColor: "rgba(0, 128, 0, 0.2",}}/>,
                linkto:"/",
            };
            break;

            case "AvailableRS":
            data2={
                title:"AVAILABLE  REALESTATES",
                counter: rsAvailRs,
                link:"View All Available RealEstates",
                icon: <BedroomParentIcon className="icon" style={{color:"purple", backgroundColor: "rgba(128, 0, 128, 0.2",}}/>,
                linkto:"/",
            };
            break;
            default:
                break;
    }
    
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data2.title}</span>
                <span className="counter">{data2.counter}</span>
                <Link to={data2.linkto} style={{ textDecoration: "none"}}> <span className="link">{data2.link}</span> </Link>
            </div>
            <div className="right">
                {data2.icon}
            </div>
        </div>
    )
}

export default Widget