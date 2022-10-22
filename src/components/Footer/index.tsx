import {
  H1,
  P,
} from "../../GlobalStyles";
import { FOOTER_MESSAGES } from './messages';
import {
  FooterContainer,
  FooterWrapper,
} from "./FooterStyles";

const Footer = () => {
  const {
    workType,
    asignee,
    university,
    years,
  } = FOOTER_MESSAGES;

  const typeAndAsignee = `${workType} ${asignee}`;
  const universityAndYears = `${university} ${years}`;
  return (
    <FooterWrapper>
      <FooterContainer>
        <H1
          marginBottom={'5px'}
        >
          {typeAndAsignee}
        </H1>
        <P>
          {universityAndYears}
        </P>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer;