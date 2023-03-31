import React, { useEffect, useState } from "react";
import "./SideBar.css";
import Title from "./Title/Title";
import { ToastContainer, toast } from "react-toastify";

const SideBar = ({ times, title }) => {
  const [breckTime, setBreckTime] = useState();
  const [breckTitle, setBreckTitle] = useState([]);
  const [length, setLength] = useState([]);

  useEffect(() => {
    let getTimeFromLocalStorage = JSON.parse(localStorage.getItem("times"));
    setBreckTime(getTimeFromLocalStorage);
  }, [times]);

  useEffect(() => {
    let getTitleFromLocalStorage = localStorage.getItem("title");
    if (getTitleFromLocalStorage) {
      let convert = getTitleFromLocalStorage.split("?");
      setBreckTitle(convert);
      setLength(convert.length);
    }
  }, [title]);

  return (
    <div className="sideBar">
      <h2
        style={{
          color: "#fff",
          backgroundColor: "#233B73",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Spent time on read min : {breckTime}
      </h2>
      <h2>Bookmarked Blogs : {length} </h2>

      {breckTitle.map((tre) => {
        return <Title tre={tre}></Title>;
      })}
    </div>
  );
};

export default SideBar;
