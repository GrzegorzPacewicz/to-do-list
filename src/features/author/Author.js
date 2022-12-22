import React from "react";
import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => {
  <Container>
    <Header title="O autorze" />
    <Section
      title="Grzegorz Pacewicz"
      body={
        <>
          Jestem <strong>speedcuberem</strong>. Znaczy to, że po prostu bardzo
          lubię układać <strong>kostkę Rubika</strong>. A w zasadzie nie kostkę, a kostki,
          ponieważ jest wiele ich odmian. Podobnie jest wiele konkurencji, w
          których można się zmierzyć w układaniu. Moimi ulubionymi konkrencjami
          są:
        </>
      }
    />
  </Container> 
};

export default Author;
