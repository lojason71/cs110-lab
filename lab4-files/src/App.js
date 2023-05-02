import './App.css';
import NewPost from './NewPost/newPost';
import Comment from './Comment/comment';

import {useState, useEffect} from 'react';

function App() {
  const [comments, setComments] = useState([])

  const addComment = (comment) => {
    //setComments([])
  }
  const addReply = (reply) => {
    //setReply
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className = "postContainer">
          <div id='title'>
            New Post
          </div>
        {/* <NewPost addComment=(addComment)></NewPost> */}
        </div>
        <div className = 'commentContainer'>
          {comments.map((comment) => {
            // <Comment addComment=(addReply) comments={comment}></Comment>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
