// You will add code to this file
 import React, {useState} from "react";
 import CommentInput from "./CommentInput";
 import Comment from "./Comment";
 import "./Comment.css";

// const CommentSection = props => {
//   // Add state for the comments
//   console.log('console2',props.comments);
// const [comments] = useState(props.comments);
//   return (
//     <div>
//       {comments.map(p => { return(
//         <Comment  props={p}/>)
//       })}
      
//       {/* map through the comments data and return the Comment component */}
      
//       <CommentInput />
//     </div>
//   );
// };

const CommentSection = props => {
  // Add state for the comments
  const [comments] = useState(props.comments);
  console.log(props.comments);
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment}/>
      })}
    </div>
  );
};

export default CommentSection;
