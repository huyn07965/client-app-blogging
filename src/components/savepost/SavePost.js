import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../utils/constants";

const SavePostStyles = styled.div`
  cursor: pointer;
  .icon-watch-later {
    width: 28px;
    height: 28px;
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;
const SavePost = ({ onClick = () => {}, savePost = false }) => {
  return (
    <SavePostStyles onClick={onClick} savePost={savePost}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={`${savePost ? theme.primary : "none"}`}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="icon-watch-later"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
    </SavePostStyles>
  );
};

export default SavePost;
