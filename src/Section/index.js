
import {
  SectionStyled,
  SectionHeader,
  SectionTitle,
  SectionBody,
} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionStyled>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </SectionHeader>
    <SectionBody>{body}</SectionBody>
  </SectionStyled>
);

export default Section;
