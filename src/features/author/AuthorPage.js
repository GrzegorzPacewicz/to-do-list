import React from "react";
import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Grzegorz Pacewicz"
        body={
          <>
            <p class="article__text">
              Jestem <strong>speedcuberem</strong>. Znaczy to, że po prostu
              bardzo lubię układać
              <strong>kostkę Rubika</strong>. A w zasadzie nie kostkę, a kostki,
              ponieważ jest wiele ich odmian. Podobnie jest wiele konkurencji, w
              których można się zmierzyć w układaniu. 
            </p>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;
