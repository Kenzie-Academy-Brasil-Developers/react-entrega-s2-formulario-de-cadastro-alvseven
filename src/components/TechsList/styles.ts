import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 0.8rem;
  border-top: 2px solid #212529;
  border-radius: 4px;
  animation: bounce 2s;

  @media (min-width: 688px) {
    width: 75%;
  }
`;

export const EmptyTechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0rem;
  border-top: 1px solid #212529;
  border-radius: 4px;

  h2 {
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.9rem;
    color: blueviolet;
    text-align: center;
  }
`;
