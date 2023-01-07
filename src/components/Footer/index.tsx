import {
  H1,
  P,
  Placeholder,
} from "../../GlobalStyles";
import {
  FooterContainer,
  FooterWrapper,
} from "./FooterStyles";

import { FOOTER_MESSAGES } from './messages';

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
    <>
      <Placeholder
        height={'60px'}
      />
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
    </>
  )
}

export default Footer;