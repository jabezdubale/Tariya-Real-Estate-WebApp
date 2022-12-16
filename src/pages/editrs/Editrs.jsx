import React, { useState, useEffect } from "react";
import axios from "axios";
import "./editrs.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useParams} from "react-router-dom";

const Editrs = () => {

    
    const fetchtheId = useParams().realEstateId;
    const rsId = fetchtheId*1;
    const [Pictures, setPictures] = useState("");  
    const [sellerId, setSellerId] = useState(null);
    const [locationLatitude, setLocationLatitude] = useState(null);
    const [locationLongitude, setLocationLongitude] = useState(null);
    const [houseType, setHouseType] = useState(null);
    const [price, setPrice] = useState(null);
    const [rsPictures, setRsPictures] = useState(null);
    const [description, setDescription] = useState(null);
    const [verificationDocs, setVerificationDocs] = useState(null);
    const [houseStatus, setHouseStatus] = useState(null);
    const [verificationStatus, setVerificationStatus] = useState(null);
    const [registerIsClicked, setRegisterIsClicked] = useState(false);

    useEffect(() => {

        if(registerIsClicked === true){
          axios.post("https://tariya-real-estate.herokuapp.com/api/realestate/edit", {
              "editorRsId": rsId,
              "editorRsSellerId": sellerId,              
              "editorLatitude": locationLatitude,
              "editorLongitude": locationLongitude,
              "editorRsHouseType": houseType,
              "editorRsPrice": price,
              "editorPictures": rsPictures,
              "editorRsDescription": description,
              "editorRsVerificationDocs": verificationDocs,
              "editorRsVerificationStatus": verificationStatus,
              "editorRsHouseStatus": houseStatus,
            }).then((response) => {
              console.log(response.data)
              
              alert("Realestate has been Editted!");
            }
              )
            .catch((error) =>{
              alert(error);
              console.log(error);
            });
            setRegisterIsClicked(false);
                  
        }
      }, [rsId, sellerId, locationLatitude, locationLongitude, houseType, price, rsPictures, description, verificationDocs, houseStatus, verificationStatus, registerIsClicked]);
      
      
    return (
        <div className="editrs"> 
            <Sidebar/>
            <div className="newrsContainer">
                <Navbar/>
                <div className="top">
                    <h1>Edit RealEstate information</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                    <img src= {Pictures ? URL.createObjectURL(Pictures) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    <div className="formInput">
                                <label htmlFor="file">Realestate main pic <DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" onChange={(event) => setPictures(event.target.files[0])}/>
                        </div>   
                    </div>
                    
                    <div className="right">
                        <form>
                            <h1>Fill in only the fields you want to change and leave the rest open</h1>
                            <div className="formInput">                                
                                <input type="text" placeholder="Seller ID" value={sellerId} onChange={(event) => setSellerId(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="Location Latitude" value={locationLatitude} onChange={(event) => setLocationLatitude(event.target.value)}/>                               
                            </div>
                            <div className="formInput">
                                <input type="text" placeholder="Location Longitude" value={locationLongitude} onChange={(event) => setLocationLongitude(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="House Type (Condo, villa)" value={houseType} onChange={(event) => setHouseType(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="Selling Price" value={price} onChange={(event) => setPrice(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="Picture URL" value={rsPictures} onChange={(event) => setRsPictures(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="More Description" value={description} onChange={(event) => setDescription(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="Link to Verification Docs" value={verificationDocs} onChange={(event) => setVerificationDocs(event.target.value)}/>                               
                            </div> 

                            <div className="formInput">
                                <input type="text" placeholder="Verification Status" value={verificationStatus} onChange={(event) => setVerificationStatus(event.target.value)}/>                               
                            </div>        

                            <div className="formInput">
                            <select type="text" value={houseStatus} onChange={(event) => setHouseStatus(event.target.value)}>
                                <option>House Status 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option value="Sold">Sold</option>
                                <option value="Unsold">Unsold</option>
                            </select>
                            </div>                        
                            
                            <button type="button" onClick={() => setRegisterIsClicked(true)}>Edit Realestate</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editrs