import styled from "styled-components";
import BackgroundImage from "../../assets/1.jpg";

export const Overlap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background: url(${BackgroundImage}) no-repeat center center;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  text-align: center;
  width: 40%;
  justify-content: flex-start;
  flex-direction: column;
  padding: 4% 4% 4% 4%;
  border-radius: 1.7%;
  background: #f0f0f0;
  @media screen and (max-width: 415px) {
    width: 80%;
    padding: 5% 5% 5% 5%;
  }
`;

export const InputSection = styled.input`
  margin-top: 30px;
  background: #e6e6e600;
  color: black;
  border: 0px;
  border-bottom: 2px solid black;
  font-size: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

export const LoginButton = styled.button`
  margin-top: 30px;
  color: black;
  padding: 7px;
  border: 2px solid black;
  background: #e6e6e600;
  font-size: 25px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 25px;
  color: gray;
`;
