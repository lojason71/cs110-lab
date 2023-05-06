import './comment.css'

import {useState, useEffect} from 'react';
import NewPost from '../NewPost/newPost';

import Button from '@mui/joy/Button';
import  KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import  KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ButtonBase, TextField, Box} from '@mui/material';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'

export default function NewComment(props) {

    const [replies, setReply] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [vote, setVote] = useState(0);

    const toggleVisiblity = () => {
        setIsVisible(!isVisible);
    }

    const addReply = (newReply, username) => {
        let tempObject = new Object();
        tempObject.message = newReply;
        tempObject.username = username;
        setReply([...replies, tempObject]);
        setIsVisible(false);
    }

    const increase = () => {
        setVote(vote + 1);
    };
    
    const decrease = () => {
        setVote(vote - 1);
    };

    return (
        <Box>   
            <Box>
                {props.username} 
                <Box id = "arrow_container">
                    {props.postMessage}
                    <Stack direction="column" spacing = {2}>
                        <IconButton id = "arrows" onClick = {increase}>
                            <KeyboardArrowUpIcon/> 
                        </IconButton>
                        <span id = "vote">{vote}</span>
                        <IconButton id = "arrows" onClick = {decrease}>
                            <KeyboardArrowDownIcon /> 
                        </IconButton>
                    </Stack>
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