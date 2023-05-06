import './newPost.css'

import {useState, useEffect} from 'react';

import Button from '@mui/joy/Button'

import { ButtonBase, TextField, Box} from '@mui/material';

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
        <Box>                 
            <TextField id="UsernameBox" label="Name..." variant="outlined" value={username} onChange={handleUsernameChange} margin="normal" />
            <Box>
                <TextField id="MessageBox" label="Write a new post..." variant="outlined" value={postMessage} onChange={handleMessageChange} margin="normal" multiline />
            </Box>
            <Box id="box" display = "flex" justifyContent ="flex-end" alignItems="flex-end">
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
        </Box>  
    );
}