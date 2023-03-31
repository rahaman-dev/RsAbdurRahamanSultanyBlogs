import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <h1 className="headerTitle">Rs Abdur Rahaman Sultany Blogs</h1>
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="image"
        />
      </div>
      <hr />
    </>
  );
};

export default Header;
