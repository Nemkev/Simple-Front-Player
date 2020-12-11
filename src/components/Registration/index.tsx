import React, { useReducer } from "react";
// import { useMutation, useQuery } from "@apollo/react-hooks";
import axios from "axios";
// import { LOGIN } from "../../mutation/LOGIN";

import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

import {
  Overlap,
  LoginForm,
  InputSection,
  LoginButton,
  Title,
  ErrorMessage,
} from "./registration.style";

export const Registration = () => {
  const [_, setCookies] = useCookies();
  const [
    {
      email,
      hashPassword,
      isLoged,
      username,
      correctEmail,
      correctPassword,
      errorMessage,
    },
    setState,
  ] = useReducer((s, a) => ({ ...s, ...a }), {
    email: "",
    hashPassword: "",
    correctEmail: "",
    correctPassword: "",
    errorMessage: "",
    isLoged: false,
    username:""
  });
//   const hello = axios.post("http://localhost:8080/auth/signup",{
//     "username": "eugeneiq",
//     "email": "eugeneiq@gmail.com",
//     "password": "1234"
//   })
  const handleSubmitRegistration = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
        axios.post("http://localhost:8080/auth/signup",{
        "username": username,
        "email": email,
        "password": hashPassword
  })
    } catch(error){
      console.log(error);
    }
  }
//   console.log(hello);
  // const [login] = useMutation(LOGIN, {
  //   variables: { email, hashPassword }
  // });

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (name === "email") {
      value.includes("@") !== true
        ? setState({
            correctEmail: 'You should write "@"',
            errorMessage: "Incorrect email",
            [name]: value,
          })
        : setState({
            correctEmail: "",
            errorMessage: "",
            [name]: value,
          });
    }
    if (name === "hashPassword") {
      value.length !== 8 && value.length <= 8
        ? setState({
            correctPassword: `You should write ${8 - value.length}`,
            errorMessage: "Password too small",
            [name]: value,
          })
        : setState({
            correctPassword: "",
            errorMessage: "",
            [name]: value,
          });
    }
    if (name === "username") {
        setState({[name]: value});
    }
  };

  return isLoged ? (
    <Redirect to="/users" />
  ) : (
    <Overlap>
      <LoginForm onSubmit={handleSubmitRegistration}>
        <Title>Registration</Title>
        <InputSection
          placeholder="email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        {correctEmail && (
          <ErrorMessage className="error-message">{correctEmail}</ErrorMessage>
        )}
        <InputSection
          placeholder="password"
          type="password"
          required
          name="hashPassword"
          value={hashPassword}
          onChange={handleChange}
        />
        <InputSection
          placeholder="username"
          type="text"
          required
          name="username"
          value={username}
          onChange={handleChange}
        />
        {correctPassword && (
          <ErrorMessage className="error-message">
            {correctPassword}
          </ErrorMessage>
        )}
        <LoginButton type="submit">Submit</LoginButton>
        {errorMessage && (
          <ErrorMessage className="error-message">{errorMessage}</ErrorMessage>
        )}
      </LoginForm>
    </Overlap>
  );
};
