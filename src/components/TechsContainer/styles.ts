import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.8rem;
  background-color: #121214;

  h4 {
    font-family: "Inter";
    font-size: 1.2rem;
    font-weight: 700;
    color: #f8f9fa;
  }

  @media (min-width: 524px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  height: 50%;
  position: fixed;
  top: 25%;
  left: calc(50% - 140px);

  @media (min-width: 524px) {
    width: 450px;
    left: calc(50% - 225px);
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  background: #343b41;
  padding: 0 0.5rem;

  h5 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 0.8rem;
    color: #f8f9fa;
  }

  button {
    font-family: "Nunito";
    font-weight: 600;
    font-size: 0.75rem;
    color: #868e96;
    background: #343b41;
    border: none;
  }
`;
