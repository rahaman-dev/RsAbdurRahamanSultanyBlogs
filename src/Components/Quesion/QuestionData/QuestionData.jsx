import React from "react";

const QuestionData = ({ question }) => {
  const { id, ques, answer, name } = question;
  return (
    <div>
      <h2 style={{ color: "#6047EC" }}>{ques}</h2>
      <h3 style={{ color: "#44424f" }}>{answer[0]}</h3>
      <h3 style={{ color: "#44424f" }}>{answer[1]}</h3>
      <h3 style={{ color: "#44424f" }}>{answer[2]}</h3>
      <h3 style={{ color: "#44424f" }}>{answer[3]}</h3>
      <h3 style={{ color: "#44424f" }}>{answer[4]}</h3>
    </div>
  );
};

export default QuestionData;
