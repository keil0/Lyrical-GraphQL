import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { hashHistory, Route, Router, IndexRoute } from "react-router";
import { ApolloProvider } from "react-apollo";

import { App } from "./components/App";
import SongsList from "./components/SongsList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

import "./style/style.css";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongsList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
