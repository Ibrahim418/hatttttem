import React, { useEffect, useState } from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import SendIcon from '@material-ui/icons/Send';
import SingleComment from './SingleComment';



const Comments = (props) => {
const auth = useSelector((state) => state.auth)




 

 

  

    return (
        <div>
            <br/>
            <p>comment</p>
            <hr/>
              {props.comments &&props.comments.map((comment , index)=>
                 (<div> <p>commentsssss</p>
                <h2>{comment.writer.firstname} : {comment.content}</h2></div>)
              )} 

        
           {/* <form className="post__form" onSubmit={onSubmit}>
            <TextField
            onChange={handleChange}
            value={comment}
                label="add comment"
                size="small"
                variant="outlined"
                className="post__input"
                placeholder="add comment"
            /> </form>
            <Button
                variant="contained"
                size="small"
                SendIcon={<SendIcon />}
                onclick={onSubmit}
            >
                Send
            </Button> */}
        </div>
    )
}

export default Comments
