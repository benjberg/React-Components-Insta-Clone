// You will add code to this file
 import React, {useState} from "react";
 import CommentInput from "./CommentInput";
 import Comment from "./Comment";
 import "./Comment.css";


const CommentSection = props => {
  // Add state for the comments
  const [comments] = useState(props.comments);
  console.log(props.comments);
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment}/>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
