import './comment.css'

import {useState, useEffect} from 'react';
import NewPost from '../NewPost/newPost';

import Button from '@mui/joy/Button';
 import  KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
 import  KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ButtonBase, TextField, Box} from '@mui/material';

export default function NewComment(props) {

    const [replies, setReply] = useState([])

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisiblity = () => {
        setIsVisible(!isVisible);
    }

    const handleReply = (event) => {
        document.getElementById.classList.toggle("visible");
    }
    const handleSubmit = (event) => {
        props.addComment();
    }

    const addReply = (newReply, username) => {
        let tempObject = new Object();
        tempObject.message = newReply;
        tempObject.username = username;
        setReply([...replies, tempObject]);
        setIsVisible(false);
    }

    const increase = (event) => {

    }
    
    const decrease = (event) => {
        
    }

    return (
        <Box>   
            <Box>
                {props.username} 
                <Box id="arrows" display = "flex" flexWrap = "wrap">
                    {props.postMessage}
                    <KeyboardArrowUpIcon id = "up" alignSelf = "flex-end" onclick = {increase}> </KeyboardArrowUpIcon>
                    <KeyboardArrowDownIcon id = "down" alignSelf = "flex-end" onclick = {decrease}> </KeyboardArrowDownIcon>
                </Box>
            </Box>
            <Box id="box" display = "flex" justifyContent ="flex-start" alignItems="flex-start">
                <Button onClick={toggleVisiblity}> Reply </Button>
                <Box> 
                    {isVisible && <NewPost onMessageSubmit={addReply}/>}
                    {replies.map((reply) => {
                        return <NewComment username={reply.username} postMessage={reply.message} />;
                    })}
                </Box>
            </Box>
        </Box> 
    );



    // return (
    //     <div>                 
    //         <TextField id="UsernameBox" label="Name..." variant="outlined" value={username} onChange={handleUsernameChange} margin="normal" />
    //         <div>
    //             <TextField id="MessageBox" label="Write a new post..." variant="outlined" value={postMessage} onChange={handleMessageChange} margin="normal" multiline />
    //         </div>
    //         <Box id="box" display = "flex" justifyContent ="flex-end" alignItems="flex-end">
    //             <Button onClick={handleSubmit}> Submit </Button>
    //         </Box>
    //     </div>  
    //);

    // const newComment = ({addReply}) => {
        //Make div that has text box
        //First Textbox for username
        //Second resizeableT extbox for comment (post comment)
        
        // Submit Button
        //Offset a little bit (padding)
        //Upvote, downvote, count
        // <ButtonBase 
        //<Button></Button>
    // }
}