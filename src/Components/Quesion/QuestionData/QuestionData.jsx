import React from "react";

const QuestionData = ({ question }) => {
  const { id, ques, answer, name } = question;
  return (
    <div>
      <h2 style={{ color: "red" }}>{ques}</h2>
      <h3>{answer[0]}</h3>
      <h3>{answer[1]}</h3>
      <h3>{answer[2]}</h3>
      <h3>{answer[3]}</h3>
    </div>
  );
};

export default QuestionData;
