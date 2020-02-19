//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const [posts] = useState(dummyData)
  console.log('console3', posts)
  return (
    <div className="posts-container-wrapper">
      {posts.map(props => {return (
        <Post key={props.userame} users={props}/>
      )})}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

