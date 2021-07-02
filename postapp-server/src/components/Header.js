import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/post">글쓰기</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
