import React from "react";
import styled from "styled-components";

const ResetButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 1em;
  padding: 0.75em;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #f8d7da;
  color: #721c24;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5c6cb;
  }
`;

function Reset({ onReset }) {
  return (
    <ResetButton onClick={onReset}>Tyhjennä</ResetButton>
  );
}

export default Reset;