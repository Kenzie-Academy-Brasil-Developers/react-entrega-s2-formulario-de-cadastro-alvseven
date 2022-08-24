import styled from "styled-components";
import "animate.css";

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  padding: 0 1rem;

  h4 {
    font-family: "Noto Sans", sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: #ffe4fa;
    text-align: center;
    letter-spacing: 2px;
  }

  @media (min-width: 688px) {
    width: 65%;
    justify-content: space-around;

    h4 {
      font-size: 1.5rem;
      letter-spacing: 3px;
    }
  }
`;

export const AddButton = styled.button`
  font-size: 1.3rem;
  color: #2ceaa3;
  background-color: #212325;
  border: 1px solid transparent;
  border-radius: 4px;

  :hover {
    transition: 600ms;
    animation: bounce 2s;
    color: #212325;
    background-color: #2ceaa3;
    border: 1px solid transparent;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    width: 5%;
  }
`;
