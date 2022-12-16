import "./singlers.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablers from "../../components/datatablers/Datatablers";
import {useParams, Link} from "react-router-dom";
import useAxios from "axios-hooks";
import _ from "lodash";
const Singlers = () => {
    const fetchtheId = useParams().realEstateId;
    const rsId = fetchtheId*1;
    const dataRs = useAxios("https://tariya-real-estate.herokuapp.com/api/realestate/list")    
    let theKey;

    dataRs[0].data.forEach(findKey => {
        if (findKey.id===rsId) return theKey = _.cloneDeep(findKey);
    });

    return (
        <div className="singlers">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                        <Link to={{pathname: `/realEstate/edit/${theKey.id}`}} style={{ textDecoration: "none"}}>
                        <div className="link">Edit</div>
                        </Link>
                        </div>
                        
                        <h1 className="title">View Information</h1>
                        <div className="item">
                        <img src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="" 
                        className="itemImg" />
                        <div className="details">
                            <h1 className="itemTitle">{theKey.location}</h1>
                            <div className="detailItem">
                                <span className="itemKey">ID: </span>
                                <span className="itemValue">{theKey.id}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Address: </span>
                                <span className="itemValue">Latitude: {theKey.locationLatitude},Longitude: {theKey.locationLongitude}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Seller's Id: </span>
                                <span className="itemValue">{theKey.sellerId}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Price: </span>
                                <span className="itemValue">{theKey.price}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">House Type: </span>
                                <span className="itemValue">{theKey.houseType}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Description: </span>
                                <span className="itemValue">{theKey.description}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Verification Status: </span>
                                
                                {theKey.verificationStatus === 0 ? (<span className="itemValue">Not Approved</span>) : (<span className="itemValue">Approved</span>)}
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">House is: </span>
                                <span className="itemValue">{theKey.houseStatus}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bottom">
                    <Datatablers/>                  
                </div>
            </div>
        </div>
    )
}

export default Singlers 