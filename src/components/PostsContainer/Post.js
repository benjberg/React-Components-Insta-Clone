// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
console.log('console1',props)
const [likes,setLikes] = useState(props.users.likes);
const incrementlikes = () => {
  setLikes(likes => likes + 1)};
  return (
    
    <div className="post-border">
      <PostHeader
        username={props.users.username}
        thumbnailUrl={
          props.users.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.users.imageUrl}
        />
      </div>
      <LikeSection post={props.users.likes} incrementlikes={incrementlikes} likes={props.users.likes}/>
      <CommentSection
        postId={props.users.imageUrl}
        comments={props.users.comments}
      />
    </div>
  );
};

export default Post;
