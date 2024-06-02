import { COMMENT_DATA } from "../utils/constants";

const Comment = ({ comment }) => {
  return (
    <div className="bg-gray-100 rounded-md my-1 p-3">
      <h1 className="font-bold">
        <i className="bi bi-person-circle mr-1"></i> {comment.name}
      </h1>
      <p className="py-2">{comment.text}</p>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((data, index) => (
    <div>
      <Comment key={index} comment={data} />
        <div className="border border-l-black pl-5 ml-5">
        <CommentList key={data.name} comments={data.replies} />
        </div>
    </div>
  ))
};

const CommentSection = () => {
  return (
    <div className="py-1">
      <h1 className="font-bold text-lg">Comments:</h1>
      <CommentList comments={COMMENT_DATA} />
    </div>
  )
};

export default CommentSection;
