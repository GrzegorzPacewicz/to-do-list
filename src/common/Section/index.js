import { SectionStyled, Header, Title, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionStyled>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <SectionBody>{body}</SectionBody>
  </SectionStyled>
);

export default Section;
