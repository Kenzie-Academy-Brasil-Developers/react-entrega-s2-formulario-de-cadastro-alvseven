import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  margin-top: 1.25rem;
  padding: 2rem 1rem;
  overflow-y: scroll;
  background-color: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  width: 90%;

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    color: #f8f9fa;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Inter";
    font-weight: 400;
    font-size: 13.0293px;
    color: #f8f9fa;
    background-color: #343b41;
    border: 1px solid #f8f9fa;
    border-radius: 3px;
  }

  label {
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.6rem;
    color: #f8f9fa;
  }

  input {
    height: 2rem;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.9rem;
    color: #f8f9fa;
    padding: 0 0.9rem;
    background-color: #343b41;
    outline: none;
    border: 0 solid transparent;
  }

  span {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  a {
    font-family: "Inter";
    font-weight: 600;
    font-size: 0.7rem;
    color: #868e96;
    text-decoration: none;
    text-align: center;
  }

  button {
    height: 2rem;
    background-color: #ff577f;
    border: 1.3px solid #ff577f;
    border-radius: 4px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 13px;
    color: #ffffff;
  }

  select {
    height: 2rem;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.9rem;
    background-color: #343b41;
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.85rem;
    color: #868e96;
    padding: 0 0.9rem;
  }

  @media (min-width: 524px) {
    max-width: 28rem;
  }
`;

export const Error = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 0.6rem;
  color: #ff6961;
`;
