import React from "react";
import "./SignleBlog.css";

const SignleBlog = ({ blog, handdleMarkAsBtn, handdleBookMark }) => {
  const {
    id,
    name,
    picture,
    prifilePicture,
    title,
    time,
    mark,
    tags,
    markAsRead,
  } = blog;
  return (
    <div>
      <img src={picture} style={{ width: "845px", height: "450px" }} />
      <div className="profiles">
        <div className="left">
          <div className="profileContainer">
            <img src={prifilePicture} alt="" className="profilePicute" />
            <div className="profileImage">
              <h3>{name}</h3>
              <p>{mark} </p>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="profiles">
            {time} Min Read
            <span onClick={() => handdleBookMark(title, id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="bookMark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <h1>{title}</h1>
      <span>{tags}</span>
      <p
        onClick={() => handdleMarkAsBtn(time)}
        style={{ color: "red", cursor: "pointer" }}
      >
        {markAsRead}
      </p>
    </div>
  );
};

export default SignleBlog;
