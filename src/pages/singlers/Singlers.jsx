import "./singlers.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatablers from "../../components/datatablers/Datatablers";
import {useParams} from "react-router-dom"
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
                        <div className="editButton">Edit</div>
                        <h1 className="title">View Information</h1>
                        <div className="item">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="" 
                        className="itemImg" />
                        <div className="details">
                            <h1 className="itemTitle">{theKey.location}</h1>
                            <div className="detailItem">
                                <span className="itemKey">ID: </span>
                                <span className="itemValue">5</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Phone Number: </span>
                                <span className="itemValue">+251944229033</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Email: </span>
                                <span className="itemValue">janedoe@gmail.com</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Date of Birth: </span>
                                <span className="itemValue">2022-10-11</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Customer Type: </span>
                                <span className="itemValue">Seller</span>
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