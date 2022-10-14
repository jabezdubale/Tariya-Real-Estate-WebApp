import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import DatePicker from "react-datepicker";
import "./datePickers.css";
import "react-datepicker/dist/react-datepicker.css";
import { Typography, Select, FormControl, MenuItem } from "@mui/material";


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(null);
  const [permission, setPermission] = useState("");
  const permissionData = ["Buyer", "Seller", "Admin",];
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
          "phone": phoneNumber,
          "email": email,
          "dob": dob,
          "permission": permission,
          "pin": password
        }).then((response) => {
          console.log(response.data)
          
          alert("Account has been created. Please log in using your Email and password");
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
  }, [fullName, phoneNumber, email, dob, permission, password, confirmPassword, registerIsClicked]);
  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" value={fullName} placeholder="Full Name" onChange={(event) => setFullName(event.target.value)} />
        <DatePicker
                    selected={dob}
                    portalId="root"
                    placeholderText="Date of Birth" 
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    isClearable
                    popperPlacement="bottom"
                    popperModifiers={{
                        flip: {
                            behavior: ["bottom"]
                        },
                        preventOverflow: {
                            enabled: false 
                        },
                        hide: {
                            enabled: false 
                        }
                    }}
                    onChange={date => setDob(date)} 
          />        
        <Input type="tel" value={phoneNumber} placeholder="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)}/>
        <Input type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
        <FormControl sx={{ "& .MuiOutlinedInput-root": { "&.Mui-focused fieldset": {borderColor: "RGBA(200, 200, 200, 0.3)"}} } }>
        <Select 
            id="permission"
            value = {permission} 
            type="text" 
            size="small" 
            fullWidth
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) { return <Typography fontSize={12} color={"rgba(200, 200, 200, 1)"}>Business Relation</Typography>; }
              return <Typography fontSize={12}> {selected}</Typography>;
            }}
            onChange={(event) => setPermission(event.target.value)}
        >
            {permissionData.map((perm) => (
            <MenuItem value={perm}> <Typography fontSize={14} ml={7}>{perm}</Typography></MenuItem>))}
        </Select>
        </FormControl>


        <Input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        <Input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(event) => setConfirmPassword(event.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={() => setRegisterIsClicked (true)} >Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}