import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import "../App.css";
import { loadUser } from "../action/authaction";
import './Profile.css'
import{Button} from './Button'

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
    

<div className='feed-container'>
        <img src='./images/camp3.jpg' className='backpic' />
      {/* <button onClick={() => profileData()}>New Person</button> */}
      <div className="card">
        <img src="./images/capserrat.jpg" style={{ width: "100%" ,borderRadius:'360%' }} />
        <h1 style={{color:'white'}}>Ibrahim</h1>
        <p className="title">myEmail</p>
        <p style={{color:'white'}}>myDescription</p>
    
      </div>
      <div className='feed-btns'>
      <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large' >
            Update Profile                
                </Button>
                </div>
    </div>
 
  )}

export default Profile;

