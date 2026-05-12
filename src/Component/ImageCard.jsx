import React, { useState, useRef } from "react";
import "./ImageCard.css"; // optional external styling

function ImageCard() {
  const [image, setImage] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const fileInputRef = useRef(null);

  // Handle image upload
  const handleImageUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle like toggle
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="card">
      <h2>Interactive Image Container</h2>

      {/* Image Upload */}
      <input type="file" ref={fileInputRef} onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded Preview" className="preview" />}

      {/* Like Button */}
      <div className="like-section">
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          ❤️
        </button>
        <span>{likes} Likes</span>
      </div>

      {/* Comment Section */}
      <div className="comment-section">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleCommentSubmit}>Submit</button>

        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageCard;
