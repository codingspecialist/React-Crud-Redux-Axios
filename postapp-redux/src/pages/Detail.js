import React from "react";
import { useSelector } from "react-redux";

const Detail = ({ match }) => {
  const id = match.params.id;
  const { posts } = useSelector((store) => store);
  const post = posts.filter((post) => post.id == id);

  return (
    <div>
      <h1>글상세보기</h1>
      <hr />
      <div>{post[0].id}</div>
      <div>{post[0].title}</div>
      <div>{post[0].content}</div>
    </div>
  );
};

export default Detail;
