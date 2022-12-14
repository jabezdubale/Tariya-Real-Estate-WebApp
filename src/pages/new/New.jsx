import React, { useState, useEffect } from "react";
import axios from "axios";
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const New = () => {

    const [fullName, setFullName] = useState("");
    const [profilePicture, setProfilePicture] = useState("https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState(null);
    const [permission, setPermission] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerIsClicked, setRegisterIsClicked] = useState(false);

    useEffect(() => {
 
        if(registerIsClicked === true){
          if (fullName==="" || phoneNumber==="" || email==="" || dob===null || permission==="" || password==="" || confirmPassword===""){
            alert("Please fill in all fields");
            setRegisterIsClicked(false);
          }else if(password === confirmPassword){
            
            axios.post("https://tariya-real-estate.herokuapp.com/api/account/create", {
              "fullName": fullName,
              "profilePicture": profilePicture,
              "phone": phoneNumber,
              "email": email,
              "dob": dob,
              "permission": permission,
              "pin": password
            }).then((response) => {
              console.log(response.data)
              
              alert("Account has been created! You can log in using your Email and password");
            }
              )
            .catch((error) =>{
              console.log(error);
            })
            setRegisterIsClicked(false);
          }else{
            alert("Password doesn't match with Confirm");
            setRegisterIsClicked(false);
          }
        
        }
      }, [fullName, profilePicture, phoneNumber, email, dob, permission, password, confirmPassword, registerIsClicked]);
      
      
    return (
        <div className="new"> 
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add new User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src= {"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"} alt="" />
                        <div className="formInput">
                                <label htmlFor="file">Profile picture: <DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" onChange={(event) => setProfilePicture((event.target.files[0]))} style={{display:"none"}}/>
                            </div>
                    </div>
                    
                    <div className="right">
                        <form>

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
                                <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>                               
                            </div>

                            <div className="formInput">
                                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>                               
                            </div>                            
                            
                            <button type="button" onClick={() => setRegisterIsClicked (true)}>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New