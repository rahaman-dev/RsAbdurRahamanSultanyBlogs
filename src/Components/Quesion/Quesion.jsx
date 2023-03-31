import React, { useEffect, useState } from "react";
import QuestionData from "./QuestionData/QuestionData";

const Quesion = () => {
  const [questions, setQustions] = useState([]);
  useEffect(() => {
    fetch("question.json")
      .then((res) => res.json())
      .then((data) => setQustions(data));
  }, []);
  return (
    <>
      <h2 style={{ fontSize: "50px", textAlign: "center" }}>Questions</h2>
      {questions.map((question) => (
        <QuestionData question={question}></QuestionData>
      ))}
    </>
  );
};

export default Quesion;
