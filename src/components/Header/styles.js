import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 5rem;
  background-color: #121214;
  border-bottom: 1px solid #212529;

  a {
    width: 4rem;
    height: 1rem;
    padding: 0.5rem 0;
    text-align: center;
    font-family: "Inter";
    font-weight: 600;
    font-size: 0.75rem;
    text-align: center;
    text-decoration: none;
    color: #f8f9fa;
    background-color: #212529;
    border-radius: 4px;
  }
`;
