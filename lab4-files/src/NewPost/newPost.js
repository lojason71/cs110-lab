import './newPost.css'

import {useState} from 'react';
import Button from '@mui/joy/Button'
import { TextareaAutosize, TextField, Box } from '@mui/material';
import { shadows } from '@mui/system';

export default function NewPost(props) {
    const [username, setUser] = useState('');
    const [postMessage, setPostMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUser(event.target.value);
    }

    const handleMessageChange = (event) => {
        setPostMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        props.onMessageSubmit(postMessage, username);
        setUser('');
        setPostMessage('');
    }

    return (
        <Box id = "postContainer" sx={{ boxShadow: 3 }}>                 
            <TextField id="UsernameBox" label="Name..." variant="outlined" value={username} onChange={handleUsernameChange} />
            <Box>
                <TextareaAutosize 
                    id="MessageBox" 
                    placeholder="Write a new post..." 
                    minRows={5}
                    value={postMessage} 
                    onChange={handleMessageChange} 
                    multiline
                />
            </Box>
            <Box id="box" display = "flex" justifyContent ="flex-end" alignItems="flex-end">
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Box>  
    );
}