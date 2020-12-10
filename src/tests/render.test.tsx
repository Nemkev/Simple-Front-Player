import React from "react";
import { render } from "@testing-library/react";
import { Additional } from "../components/Additional";
import { Buildings } from "../components/Building";
import { Concerts } from "../components/Concerts";
import { Login } from "../components/Login";
import { Rooms } from "../components/Rooms";
import { Users } from "../components/Users";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql",
  credentials: "include"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

describe("Render Home Component", () => {
  it("Test component Render", () => {
    const { debug } = render(
      <ApolloProvider client={client}>
        <Rooms />
      </ApolloProvider>
    );

    debug();
  });

  it("Test component Render", () => {
    const { debug } = render(
      <ApolloProvider client={client}>
        <Users />
      </ApolloProvider>
    );

    debug();
  });

  it("Test component Render", () => {
    const { debug } = render(
      <ApolloProvider client={client}>
        <Additional />
      </ApolloProvider>
    );

    debug();
  });

  it("Test component Render", () => {
    const { debug } = render(
      <ApolloProvider client={client}>
        <Concerts />
      </ApolloProvider>
    );

    debug();
  });

  it("Test component Render", () => {
    const { debug } = render(
      <ApolloProvider client={client}>
        <Login />
      </ApolloProvider>
    );

    debug();
  });

  it("Test component Render", () => {
    const { debug } = render(
      <ApolloProvider client={client}>
        <Buildings />
      </ApolloProvider>
    );

    debug();
  });
});
