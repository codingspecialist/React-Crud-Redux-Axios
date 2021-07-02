import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/post",
    })
      .then((res) => {
        console.log(res);
        setPosts(res.data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <h1>글목록보기</h1>
      <hr />
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
