import styled, { css } from "styled-components";
import "animate.css";

interface ColorProps {
  status: string;
}

export const TechInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  button {
    text-align: center;
    background-color: #121214;
    border: none;
    padding: 0;
    border-radius: 8px;
  }
`;

export const TechListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.7rem;
  background-color: #735cdd;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  animation: backInLeft 3s;

  :hover {
    transition: 700ms;
    background-color: #121214;
    border: 1px solid blueviolet;
  }

  h5 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 0.9rem;
    color: #c2eabd;
    word-wrap: break-word;
    max-width: 55%;
  }

  span {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 0.85rem;
    ${({ status }: ColorProps) =>
      status === "Avançado"
        ? css`
            color: #5adbff;
          `
        : status === "Intermediário"
        ? css`
            color: #f68e5f;
          `
        : css`
            color: #f9c80e;
          `}
  }
`;
