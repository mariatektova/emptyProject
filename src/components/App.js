import React from "react";
import { createGlobalStyle } from "styled-components";
import arrow from "../images/arrow.png";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
    #root {
        background-color: #000;
        flex: 1;
        display: flex;
        flex-direction: column;
        background-size: 100vw auto, auto 2000rem;
        height: 100vh;
        @media (max-width: 1470px) {
            background-size: 100vw auto, auto 1703rem;
   
        }

        @media (max-width: 756px) {
            background-size: auto 905rem;
            padding-top: 60rem;
            padding-bottom: 40rem;
        }
    }
    
    a {
        text-decoration: none;
        transition: color 0.1s linear 0s;
        color: rgba(255, 255, 255, 1);
        
        &:hover {
            color: rgba(95, 190, 21, 1);
        }
    }
`;

const AppButton = styled.button`
  background-image: url("${arrow}");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  width: 200px;
  height: 200px;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppButton />
    </>
  );
}
