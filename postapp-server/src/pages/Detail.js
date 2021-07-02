import React from "react";
import { useSelector } from "react-redux";

const Detail = ({ match }) => {
  const id = match.params.id;

  return (
    <div>
      <h1>글상세보기</h1>
      <hr />
    </div>
  );
};

export default Detail;
