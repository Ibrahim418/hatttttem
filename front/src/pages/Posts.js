import React, { useEffect, useState } from 'react'
import {  useSelector } from "react-redux";
import "./Feed.css";
import "../App.css";
import Moment from "react-moment";
import { Spinner } from "react-bootstrap";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Comments from './Comments';
import Comment from './Comment';
import axios from 'axios';



const Posts = ({ post }) => {
  const auth = useSelector((state) => state.auth);
  const  [comments,setComments]= useState(null)
  const [error, setError] = useState(null)
  const refreshComment = ()=>{
  
    axios.get("http://localhost:4000/api/comment/getComments/"+post._id)
    .then (res=>{
      console.log(res.data)
      return setComments(res.data)})
    .catch ((err)=>setError(err.response.data))
}
useEffect(() => {
  axios.get("http://localhost:4000/api/comment/getComments/"+post._id)
  .then (res=>setComments(res.data))
  .catch ((err)=>setError(err.response.data))
  }, [])

  // const updateComment = (newComment) => {
  //   setCommentList(commentList.concat(newComment));
  // };

  // const [commentList, setCommentList] = useState([]);
 
 

  return post === null || !post ? (
    <div className="all-page-wrapper flex__center">
      <Spinner />
    </div>
  ) : (
    <div className="post">
      
    <div className="post__header">
        <ListItem>
            <ListItemAvatar>
                <Avatar className="post__avatar" src="" alt="User" />
            </ListItemAvatar>
            <ListItemText primary={`${post.owner.firstname} ${post.owner.lastname}`} secondary="Abu Dhabi, UAE" />
        </ListItem>
        <img
            className="post__image"
            src={post.picture}/>
        <h4 className="post__text"><strong> </strong>{post.title}</h4>
         <h4 className="post__text"><strong> </strong>{post.discription}</h4>
        <div className="post__comments">
            {/* <Comments /> */}
        </div>
        <Comments postId={post._id} comments={comments}/>
        <Comment refreshComment={refreshComment}   postId={post._id} writer={auth.user._id}/>
            
        
    </div>
</div>
  );
};




export default Posts;

// <div className="bg-gray-100 m-auto w-96 h-64 mt-5" style="background-image:url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350'); background-position: center; background-repeat: no-repeat; background-size: cover;">
//   <div className="flex flex-row items-end h-full w-full">
//     <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
//       <h3 className="text-base font-bold leading-5 uppercase">Lorem, ipsum dolor sit amet elit foure consectetur adipisicing.</h3>
//       <div className="inline-flex items-center">
//         <span className="capitalize font-base text-xs my-1 mr-1">Agnezmo Tuginem</span>
//         <svg className="stroke-current stroke-1 text-blue-600 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//           <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//         </svg>
//       </div>
//       <div className="flex flex-row justify-between">
//         <div className="flex flex-row">
//           <div className="w-max inline-flex items-center">
//             <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//             <span className="text-xs ml-1 antialiased">0</span>
//           </div>
//           <div className="w-max inline-flex ml-4 items-center">
//             <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//             </svg>
//             <span className="text-xs ml-1 antialiased">1</span>
//           </div>
//           <div className="w-max inline-flex ml-4 items-center">
//             <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="text-xs ml-1 antialiased">1 Hours ago</span>
//           </div>
//         </div>
//         <div className="w-max">
//           <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

