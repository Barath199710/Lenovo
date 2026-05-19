import { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchData";
import React from "react";
import "../styles//Gallery.css";

function Gallery() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetchPosts().then(data => setPosts(data.slice(0, 5)));
  }, []);

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        { id: Date.now(), title: newPost, body: "Custom content" }
      ]);
      setNewPost("");
    }
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="add-section">
        <input 
          value={newPost} 
          onChange={(e) => setNewPost(e.target.value)} 
          placeholder="Add new project"
        />
        <button onClick={addPost}>Add</button>
      </div>

      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
