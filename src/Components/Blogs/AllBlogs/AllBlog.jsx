import React, { useEffect, useState } from "react";
import SignleBlog from "../SignleBlog/SignleBlog";
import "./AllBlog.css";

const AllBlog = ({ handdleMarkAsBtn, handdleBookMark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="cnt">
      {blogs.map((blog) => (
        <SignleBlog
          key={blog.id}
          handdleMarkAsBtn={handdleMarkAsBtn}
          handdleBookMark={handdleBookMark}
          blog={blog}
        ></SignleBlog>
      ))}
    </div>
  );
};

export default AllBlog;
