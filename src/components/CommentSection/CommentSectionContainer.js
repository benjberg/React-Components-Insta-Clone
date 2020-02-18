// You will add code to this file
 import React, {useState} from "react";
 import CommentInput from "./CommentInput";
 import Comment from "./Comment";
 import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log('console2',props)
const [comments] = useState(props);
  return (
    <div>
      {comments.man(p =>{
        <Comment props={p}/>
      })}
      {/* map through the comments data and return the Comment component */}
      
      <CommentInput />
    </div>
  );
};

export default CommentSection;
