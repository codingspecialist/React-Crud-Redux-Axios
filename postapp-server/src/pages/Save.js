import axios from "axios";
import React, { useState } from "react";

const Save = (props) => {
  const [postDto, setPostDto] = useState({
    title: "",
    content: "",
  });

  console.log(postDto);

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      data: JSON.stringify(postDto),
      url: "http://localhost:8000/post",
    })
      .then((res) => {
        console.log(res);
        props.history.push("/");
      })
      .catch((error) => {
        alert("글쓰기 실패");
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <input type="text" name="title" onChange={changeValue} />
        <br />
        <input type="text" name="content" onChange={changeValue} />
        <br />
        <button onClick={submit}>글쓰기완료</button>
      </form>
    </div>
  );
};

export default Save;
