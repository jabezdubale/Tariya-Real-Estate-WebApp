import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Maps from "../../components/maps/Maps";
import RealInfo from "../../components/realInfo/RealInfo";

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="Users"/>
                    <Widget type="RealEstates"/>
                    <Widget type="AvailableRS"/>
                    <Widget type="SoldRS"/>
                    
                </div>
                <div className="maps">
                    <RealInfo/>
                    <Maps/>
                </div>
            </div>
        </div>
    )
}

export default Home