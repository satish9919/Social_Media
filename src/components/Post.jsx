import { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import "./Post.css"; // we'll put hover effects here

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`post-card-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Delete Button */}
      <span
        className="delete-btn"
        onClick={() => deletePost(post.id)}
      >
        <AiFillDelete size={18} />
      </span>

      {/* Title */}
      <h3 className="post-title">{post.title}</h3>

      {/* Body */}
      <p className="post-body">{post.body}</p>

      {/* Tags */}
      <div className="post-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag-chip">
            #{tag}
          </span>
        ))}
      </div>

      {/* Reactions */}
      <div className="post-reactions">
        👍 This post has been reacted by {post.reactions} people.
      </div>
    </div>
  );
};

export default Post;
