import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  animation: fadeIn 3s;
  img {
    width: 6.25rem;
    height: 0.9rem;
    margin-top: 1.5rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin-top: 1.25rem;
  padding: 2rem 1rem;
  background-color: #212529;
  border-radius: 3px;
  box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);

  h3 {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #f8f9fa;
    text-align: center;

    @media (min-width: 524px) {
      font-size: 1.2rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Inter";
    font-size: 13px;
    font-weight: 400;
    color: #f8f9fa;
    background-color: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3px;
  }

  label {
    font-family: "Inter";
    font-size: 0.8rem;
    font-weight: 400;
    color: #f8f9fa;

    @media (min-width: 524px) {
      font-size: 1rem;
    }
  }

  input {
    height: 2rem;
    padding: 0 0.9rem;
    font-family: "Inter";
    font-size: 0.9rem;
    font-weight: 400;
    color: #f8f9fa;
    background-color: #343b41;
    border: 0 solid transparent;
    outline: none;
  }

  span {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  a {
    font-family: "Inter";
    font-size: 0.8rem;
    font-weight: 600;
    color: #868e96;
    text-decoration: none;
    text-align: center;
  }

  button {
    height: 2rem;
    font-family: "Inter";
    font-weight: 500;
    font-size: 1rem;
    color: #ffffff;
    background-color: #59323f;
    border: 1.3px solid #59323f;
    border-radius: 4px;

    :hover {
      transition: 500ms;
      color: #59323f;
      background-color: #f8f9fa;
    }

    @media (min-width: 524px) {
      height: 2.2rem;
      font-size: 1.2rem;
    }
  }

  select {
    height: 2rem;
    padding: 0 0.9rem;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.85rem;
    color: #868e96;
    background-color: #343b41;
  }

  @media (min-width: 524px) {
    max-width: 28rem;
  }

  @media (max-height: 915px) {
    margin-bottom: 2rem;
  }
`;

export const Error = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 0.6rem;
  color: #ff6961;
`;
