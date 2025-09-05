import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form
      className="p-4 rounded shadow-lg bg-light border"
      style={{ maxWidth: "600px", margin: "auto" }}
      onSubmit={handleSubmit}
    >
      <h3 className="text-center mb-4 text-primary">
        ✏️ Create a New Post
      </h3>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label fw-bold">
          👤 User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your User ID"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-bold">
          📝 Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="What's on your mind?"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label fw-bold">
          📄 Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Share your thoughts..."
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label fw-bold">
          ❤️ Number of Reactions
        </label>
        <input
          type="number"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="e.g., 15"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label fw-bold">
          #️⃣ Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Enter tags separated by space"
        />
      </div>

      <button
        type="submit"
        className="btn btn-success w-100 fw-bold shadow-sm"
      >
        🚀 Post Now
      </button>
    </form>
  );
};

export default CreatePost;
