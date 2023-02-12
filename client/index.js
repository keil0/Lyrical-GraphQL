import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { hashHistory, Route, Router, IndexRoute } from "react-router";
import { ApolloProvider } from "react-apollo";

import { App } from "./components/App";
import SongsList from "./components/SongsList";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongsList} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
