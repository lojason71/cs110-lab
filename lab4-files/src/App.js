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
      <strong>New Post</strong>
      <NewPost onMessageSubmit={addComment}/>
      <div className= "commentContainer">  
        {comments.map((comment) => {
          return <Comment username={comment.username} postMessage={comment.message} depth={0} />;
        })}
      </div> 
    </div>
  );
}

export default App;
