import React, { useEffect, useState } from "react";
import "../Cau3/PostList.css"
import Item from "../component/Item";
const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10))); // Lấy 10 bài viết đầu tiên
  }, []);
  return (
    <div className="menu" style={styles.container}>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.map((post) => (
          <Item key={post.id} userID={post.userId} id={post.id} title={post.title} body={post.body}/>
        ))}
      </ul>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid black",
    width: "300px",
    margin: "auto",
  },
};

export default PostList;
