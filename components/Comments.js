import React from "react";
import styled from "styled-components";
import { uid } from "uid";

const LiStyle = styled.li`
  list-style: none;
`;
export default function Comments({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <LiStyle key={uid()}>
            {`"${comment}" (${new Date().toLocaleDateString()})`}
          </LiStyle>
        ))}
      </ul>
    </div>
  );
}
