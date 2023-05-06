import './App.css';
import NewPost from './NewPost/newPost';
import Comment from './Comment/comment';

import {useState, useEffect} from 'react';


function App() {
  const [comments, setComments] = useState([])

  const addComment = (newComment, username) => {
    let tempObject = new Object();
    tempObject.message = newComment;
    tempObject.username = username;
    setComments([...comments, tempObject]);
  }

  return (
    <div className = "postContainer">
      <h1> 
        <strong>New Post</strong>
      </h1>
      <NewPost onMessageSubmit={addComment}/>
      <div className = "commentContainer">  
        {comments.map((comment) => {
          return <Comment username={comment.username} postMessage={comment.message} />;
        })}
      </div> 
    </div>
  );
}

export default App;
