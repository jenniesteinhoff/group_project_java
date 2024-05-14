import React from "react";

const Message = ({ greet, who }) => {
  return <span>{greet}, {who}</span>;
};

export default Message;