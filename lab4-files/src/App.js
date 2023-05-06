import './App.css';
import NewPost from './NewPost/newPost';
import NewComment from './Comment/comment';

import {useState, useEffect} from 'react';


function App() {
  const [comments, setComments] = useState([])
  const [reply, setReply] = useState([])

  const addComment = (newComment, username) => {
    let tempObject = new Object();
    tempObject.message = newComment;
    tempObject.username = username;
    setComments([...comments, tempObject]);
  }

  // const addReply = (reply) => {
  //   setReply()
  // }

  return (
    <div className = "postContainer">
      <h1> 
        <b>New Post</b>
      </h1>
      <NewPost onMessageSubmit={addComment}/>
      <div className = "commentContainer">  
        {comments.map((comment) => { //Array 
          // <NewComment addComment={addReply} comments={comment}/> //addComent makes newReply , comments is used to give text to display
          // console.log(comment);
          return <NewComment username={comment.username} postMessage={comment.message} />;
        })}
      </div> 
    </div>

    // <NewPost addComment = {addComment}> </NewPost>

    // <div className="App">
    //   <header className="App-header">
    //     <div className = "postContainer">
    //       <div id='title'>
    //         {/* <New Post>
    //          */}
    //          <NewComment/>
    //       </div>
    //     {/* <NewPost addComment=(addComment)></NewPost> */}
    //     </div>
    //     <div className = 'commentContainer'>
          // {comments.map((comment) => {
          //   // <Comment addComment=(addReply) comments={comment}></Comment>
          // })}
    //     </div>
    //   </header>
    // </div>
  );
}

export default App;
