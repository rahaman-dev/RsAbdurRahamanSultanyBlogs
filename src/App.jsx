import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import AllBlog from "./Components/Blogs/AllBlogs/AllBlog";
import SideBar from "./Components/SideBar/SideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Quesion from "./Components/Quesion/Quesion";

function App() {
  // const [count, setCount] = useState(0);
  const [times, setTimes] = useState([]);
  const [title, setTitle] = useState([]);
  const [toasts, setToasts] = useState(false);

  const handdleMarkAsBtn = (time) => {
    const priviusTimes = JSON.parse(localStorage.getItem("times"));
    if (priviusTimes) {
      const sum = priviusTimes + time;
      localStorage.setItem("times", sum);
      setTimes(sum);
    } else {
      localStorage.setItem("times", time);
      setTimes(time);
    }
  };

  const handdleBookMark = (title, id) => {
    let updatedTitle = [];
    let updatedId = [];
    let priviusTitle = JSON.parse(localStorage.getItem("title"));
    let priviusId = localStorage.getItem("id");

    if (priviusTitle) {
      updatedTitle = [...priviusTitle, title];
      localStorage.setItem("title", JSON.stringify(updatedTitle));
      setTitle(updatedTitle);
    } else {
      updatedTitle = [title];
      localStorage.setItem("title", JSON.stringify(updatedTitle));
      setTitle(updatedTitle);
    }

    if (priviusId === id) {
      setToasts(true);
      toast("Already Exit!");
    } else {
      localStorage.setItem("id", id);
      setToasts(false);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="App">
        <AllBlog
          handdleMarkAsBtn={handdleMarkAsBtn}
          handdleBookMark={handdleBookMark}
        ></AllBlog>
        <SideBar times={times} title={title}></SideBar>
        <ToastContainer></ToastContainer>
      </div>
      <Quesion></Quesion>
    </>
  );
}

export default App;
