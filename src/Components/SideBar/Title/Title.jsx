import React from "react";

const Title = ({ tre }) => {
  return (
    <>
      <h4
        style={{
          backgroundColor: "yellowgreen",
          fontSize: "25px",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        {tre}
      </h4>
    </>
  );
};

export default Title;
