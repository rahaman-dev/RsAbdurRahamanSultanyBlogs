import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import AllBlog from "./Components/Blogs/AllBlogs/AllBlog";
import SideBar from "./Components/SideBar/SideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);
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

  const handdleBookMark = (title) => {
    const priviusTitle = localStorage.getItem("title");
    if (priviusTitle && priviusTitle == title) {
      setToasts(true);
      toast("Already Exit!");
    } else {
      setToasts(false);
    }
    if (priviusTitle) {
      const sum = priviusTitle + title;
      JSON.stringify(localStorage.setItem("title", sum));
      setTitle(sum);
    } else {
      JSON.stringify(localStorage.setItem("title", title));
      setTitle(title);
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
    </>
  );
}

export default App;
