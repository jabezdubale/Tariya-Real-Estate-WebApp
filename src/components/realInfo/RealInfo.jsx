import "./realInfo.scss"
import useAxios from "axios-hooks";

const RealInfo = () => {

    const dataRs = useAxios("https://tariya-real-estate.herokuapp.com/api/realestate/list")

    return (
        <div className="realInfo">
            <div className="top">
            <span className="title">MORE INFO</span>
            <button type="button" className="botton1" style={{backgroundColor: "rgba(0, 128, 0, 0.2",}}>Contact Seller</button>

            </div>
            <div className="bottom">
                <span className="span">Images</span>
                <div className="rsimgcontain">
                    
                    <img
                    className="rsimg"
                    src="https://images.pexels.com/photos/3941900/pexels-photo-3941900.jpeg?cs=srgb&dl=pexels-izzy-villa-3941900.jpg&fm=jpg&_gl=1*e2gw6x*_ga*MTQ4Mzk2MjA0MC4xNjY2MTc4MTgw*_ga_8JE65Q40S6*MTY2NjQwMjExNy4yLjEuMTY2NjQwMjE3MC4wLjAuMA.."
                    alt=""  
                    />

<img
                    className="rsimg"
                    src="https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""  
                    />

<img
                    className="rsimg"
                    src="https://images.pexels.com/photos/3741317/pexels-photo-3741317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""  
                    />

<img
                    className="rsimg"
                    src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""  
                    />
                    <img
                    className="rsimg"
                    src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Kitchen"  
                    />
                    <img
                    className="rsimg"
                    src="https://images.pexels.com/photos/2387630/pexels-photo-2387630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Garage"  
                    />
                </div>
                <span className="span">Description</span>
                <div className="description">
                    <ul>
                        <li>Address: Ethiopia, Addis Ababa, K/k, W06 </li> 
                        <li>Price: 3,400,000</li>
                        <li>Number of bedroom: 3</li>
                        <li>Number of bathroom: 4</li>
                        <li>Built year: 2012</li>
                        <li>Special Features:  <ul> 
                            <li>Air Conditioning</li>
                            <li>Wifi</li>
                            <li>Parking</li>
                            </ul> 
                            </li>
                                            
                    </ul>
                    
                </div>
                
            </div>

            <div className="footer">
                <button type="button" className="botton2" style={{backgroundColor: "rgba(0, 128, 0, 0.2",}}>Contact Seller</button>
            </div>
        </div>
    )
}

export default RealInfo