import React, { useReducer } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
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
} from "./login.style";

export const Login = () => {
  const [_, setCookies] = useCookies();
  const [
    {
      email,
      hashPassword,
      isLoged,
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
  });
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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const { data } = await login();
      // setCookies("access-token", data.login.accessToken);
      // setCookies("refresh-token", data.login.refreshToken);
      // if (data.login.role === "admin") {
      //   setState({
      //     isLoged: true
      //   });
      // }
    } catch (error) {
      console.log(error);
      setState({
        isLoged: false,
        errorMessage: "Incorrect email or password",
      });
    }
  };

  return isLoged ? (
    <Redirect to="/users" />
  ) : (
    <Overlap>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
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
