import React, { useState, useEffect } from "react";
import axios from "axios";
import "./edituser.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useParams} from "react-router-dom";

const Edituser = () => {

    const fetchtheId = useParams().userId;
    const userId = fetchtheId*1;
    const [Pictures, setPictures] = useState("");
    const [fullName, setFullName] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [dob, setDob] = useState(null);
    const [permission, setPermission] = useState(null);
    const [password, setPassword] = useState(null);
    const [registerIsClicked, setRegisterIsClicked] = useState(false);

    useEffect(() => {
 
        if(registerIsClicked === true){
            
            axios.post("https://tariya-real-estate.herokuapp.com/api/account/edit", {
              "editorID": userId,
              "editorName": fullName,
              "editorPropic": profilePicture,
              "editorPhone": phoneNumber,
              "editorEmail": email,
              "editorDOB": dob,
              "editorPermission": permission,
              "editorPin": password
            }).then((response) => {
              console.log(response.data)
              
              alert("Account has been Editted! Please remember your new identity");
            }
              )
            .catch((error) =>{
              alert(error);
              console.log(error);
            })
            setRegisterIsClicked(false);        
        }
      }, [userId, fullName, profilePicture, phoneNumber, email, dob, permission, password, registerIsClicked]);
      
      
    return (
        <div className="edituser"> 
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                <h1>Edit Account information</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src= {Pictures ? URL.createObjectURL(Pictures) : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"} alt="" />
                        <div className="formInput">
                                <label htmlFor="file">Profile picture: <DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" onChange={(event) => setPictures((event.target.files[0]))} style={{display:"none"}}/>
                            </div>
                    </div>
                    
                    <div className="right">
                        <form>

                            <h1>Fill in only the fields you want to change and leave the rest open</h1>

                            <div className="formInput">                                
                                <input type="text" placeholder="Full Name" value={fullName} onChange={(event) => setFullName(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="date" placeholder="Date of Birth" value={dob} onChange={(event) => setDob(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                            <select type="text" value={permission} onChange={(event) => setPermission(event.target.value)}>
                                <option>Business Relation 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                                <option value="Admin">Admin</option>
                            </select>
                            </div>

                            <div className="formInput">
                                <input type="text" placeholder="Profile picture URL" value={profilePicture} onChange={(event) => setProfilePicture(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>                               
                            </div>
                            
                            <button type="button" onClick={() => setRegisterIsClicked (true)}>Edit Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edituser