import { Nav, Ul, Li, StyledNavLink } from "./styled";

function Navigation() {
  return (
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
  );
}

export default Navigation;