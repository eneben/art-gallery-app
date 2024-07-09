import React from "react";

export default function Comments({ comments }) {
  const liStyle = {
    listStyleType: "none",
  };
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} style={liStyle}>
            {`"${comment}" (${new Date().toLocaleDateString()})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
