import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField,} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {Comment , Button ,Input} from 'antd'
const SingleComment = () => {

  const action=[
      <span onClick key ='comment-basic-reply-to'>reply to</span>

  ]
   

    return (
        <div>
            <Comment 
            action={action }
            author 
        avatar ={<Avatar src="" alt=""  />} 
        content ={<p>

        </p>}></Comment>

            <form className="post__form" onSubmit>
            <TextField
            onChange
            value//{comment}
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
                onclick//={onSubmit}
            >
                Send
            </Button>
        </div>
    )
}

export default SingleComment
