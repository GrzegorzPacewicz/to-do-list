import React from "react";
import { Redirect, HashRouter, Switch, Route } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { Li, Nav, StyledNavLink, Ul } from "./styled";

const App = () => (
  <HashRouter>
    <Nav>
      <Ul>
        <Li>
          {" "}
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </Li>
        <Li>
          {" "}
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </Li>
      </Ul>{" "}
    </Nav>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
