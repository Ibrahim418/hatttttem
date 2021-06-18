import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import "../App.css";
import { loadUser } from "../action/authaction";
import './Profile.css'
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.user) dispatch(loadUser());
  }, [dispatch, auth.user]);

// const [profileName,setProfileName]=useState("");
// const [profileImage,setProfileImage]=useState("");
// const [profileEmail,setProfileEmail]=useState("");

// const profileData = async ()=>{
//     try{
//         const res = await axios.get("/users/:userId");
//         setProfileEmail(res.data.results[0].Email)
//         setProfileName(`${res.data.results[0].firstName} ${res.data.results[0].lastName}`)
//         setProfileEmail(res.data.results[0].Email)
//     }catch(error){
//         console.log(error)
//     }
// }
// useEffect(() => {
//     profileData();
//   }, []);

  return (
    
<div>
      {/* <button onClick={() => profileData()}>New Person</button> */}
      <div className="card">
        <img src="./images/capserrat.jpg" style={{ width: "100%" }} />
        <h1>Ibrahim</h1>
        <p className="title">myEmail</p>
        <p>myDescription</p>
        <p>
          <button>Edit Profile</button>
        </p>
      </div>
    </div>
 
  )}

export default Profile;

