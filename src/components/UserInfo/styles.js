import styled from "styled-components";

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0.8rem;
  background-color: #121214;
  border-bottom: 1px solid #212529;

  h3 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 1.25rem;
    color: #f8f9fa;
  }

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.75rem;
    color: #868e96;
  }

  @media (min-width: 524px) {
    align-items: center;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
