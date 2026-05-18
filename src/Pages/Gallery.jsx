import { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchData";
import React from "react";

function Gallery() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetchPosts().then(data => setPosts(data.slice(0, 5)));
  }, []);

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: Date.now(), title: newPost, body: "Custom content" }]);
      setNewPost("");
    }
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="page">
      <h1>Gallery</h1>
      <input 
        value={newPost} 
        onChange={(e) => setNewPost(e.target.value)} 
        placeholder="Add new project"
      />
      <button onClick={addPost}>Add</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Gallery;
