import React, { useState, useEffect } from "react";
import axios from "axios";
import "./newrs.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const Newrs = () => {

    const [sellerId, setSellerId] = useState("");
    const [locationLatitude, setLocationLatitude] = useState("");
    const [locationLongitude, setLocationLongitude] = useState("");
    const [houseType, setHouseType] = useState("");
    const [price, setPrice] = useState("");
    const [rsPictures, setRsPictures] = useState("");
    const [description, setDescription] = useState("");
    const [verificationDocs, setVerificationDocs] = useState("");
    const [houseStatus, setHouseStatus] = useState("");
    const [registerIsClicked, setRegisterIsClicked] = useState(false);

    useEffect(() => {

        if(registerIsClicked === true){
          if (sellerId==="" || locationLatitude==="" || locationLongitude==="" || houseType==="" || price==="" || description==="" || verificationDocs==="" || houseStatus===""){
            alert("Please fill in all fields");
            setRegisterIsClicked(false);
          }else{
            
            axios.post("https://tariya-real-estate.herokuapp.com/api/realestate/create", {
              "sellerId": sellerId,
              "locationLatitude": locationLatitude,
              "locationLongitude": locationLongitude,
              "houseType": houseType,
              "price": price,
              "description": description,
              "verificationDocs": verificationDocs,
              "houseStatus": houseStatus,
            }).then((response) => {
              console.log(response.data)
              
              alert("Realestate has been created!");
            }
              )
            .catch((error) =>{
              alert(error);
              console.log(error);
            });
            setRegisterIsClicked(false);
          }        
        }
      }, [sellerId, locationLatitude, locationLongitude, houseType, price, rsPictures, description, verificationDocs, houseStatus, registerIsClicked]);
      
      
    return (
        <div className="newrs"> 
            <Sidebar/>
            <div className="newrsContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add new RealEstate</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                    <img src= {rsPictures ? URL.createObjectURL(rsPictures) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                        
                    </div>
                    
                    <div className="right">
                        <form>

                        <div className="formInput">
                                <label htmlFor="file">Realestate main pic <DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" onChange={(event) => setRsPictures(event.target.files[0])}/>
                        </div>

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
                                <input type="text" placeholder="More Description" value={description} onChange={(event) => setDescription(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="Link to Verification Docs" value={verificationDocs} onChange={(event) => setVerificationDocs(event.target.value)}/>                               
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
                            
                            <button type="button" onClick={() => setRegisterIsClicked(true)}>Create Realestate</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newrs