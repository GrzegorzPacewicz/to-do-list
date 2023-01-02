import { Nav, Ul, Li, StyledNavLink } from "./styled";
import { toAuthor, toTasks } from "../routes";

function Navigation() {
  return (
    <Nav>
      <Ul>
        <Li>
          {" "}
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Li>
        <Li>
          {" "}
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </Li>
      </Ul>{" "}
    </Nav>
  );
}

export default Navigation;