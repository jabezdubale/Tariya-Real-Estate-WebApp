import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import {useParams} from "react-router-dom"
import useAxios from "axios-hooks";
import _ from "lodash";

const Single = () => {
    const fetchtheId = useParams().userId;
    const userId = fetchtheId*1;
    const dataUser = useAxios("https://tariya-real-estate.herokuapp.com/api/account/list")    
    let theKey;

    dataUser[0].data.forEach(findKey => {
        if (findKey.id===userId) return theKey = _.cloneDeep(findKey);
    });

    return (
        <div className="single">
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
                            <h1 className="itemTitle">{theKey.fullName}</h1>
                            <div className="detailItem">
                                <span className="itemKey">ID: </span>
                                <span className="itemValue">{theKey.id}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Phone Number: </span>
                                <span className="itemValue">{theKey.phone}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Email: </span>
                                <span className="itemValue">{theKey.email}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Date of Birth: </span>
                                <span className="itemValue">{theKey.dob}</span>
                            </div>

                            <div className="detailItem">
                                <span className="itemKey">Customer Type: </span>
                                <span className="itemValue">{theKey.permission}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bottom">
                    <Datatable/>                  
                </div>
            </div>
        </div>
    )
}

export default Single 