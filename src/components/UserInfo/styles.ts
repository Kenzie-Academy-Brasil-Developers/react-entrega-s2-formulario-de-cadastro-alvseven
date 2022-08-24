import styled from "styled-components";
import "animate.css";

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0.8rem;
  background-color: #121214;
  border-bottom: 1px solid #212529;
  animation: fadeIn 2s;

  h3 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 1.25rem;

    background: linear-gradient(
      250deg,
      #df2935,
      #3772ff,
      #54e8c9,
      #0a014f,
      #466995,
      #f58f29,
      #96031a,
      #ead637,
      #462255,
      #93e1d8,
      #031926
    );
    background-size: 600% 600%;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: AnimationName 5s ease infinite;
    animation: AnimationName 5s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
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
