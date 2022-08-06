import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0.8rem;
  background-color: #121214;

  h4 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 0.75rem;
    color: #f8f9fa;
    margin-bottom: 1rem;
  }

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.5rem;
    color: #ffffff;
  }

  @media (min-width: 524px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;
