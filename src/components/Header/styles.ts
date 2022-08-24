import styled from "styled-components";
import "animate.css";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 5rem;
  background-color: #121214;
  border-bottom: 1px solid #212529;
  animation: fadeIn 6s;

  img:hover {
    animation: fadeInDown 1s;
  }

  a {
    width: 4rem;
    height: 1rem;
    padding: 0.5rem 0;
    font-family: "Inter";
    font-size: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    color: #f8f9fa;
    background-color: #212529;
    border-radius: 4px;

    :hover {
      animation: fadeIn 2s;
      color: #212529;
      background-color: #f8f9fa;
    }
  }
`;
