import
  styled,
  { createGlobalStyle }
from 'styled-components';
import { SCREEN_RESOLUTIONS } from './constants';
import { H1Props, PlaceholderProps } from './types';

export const ResetCSS = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const Placeholder = styled.div`
  height: ${(props: PlaceholderProps) => (props.height 
    ? props.height 
    : '0px')};
`;

export const H1 = styled.h1`
  display: ${(props: H1Props) => props.isBlock
    ? 'block'
    : 'inline'
  };

  font-size: 22px;
  letter-spacing: 0.05em;
  font-family: inherit;
  font-weight: 600

  margin-bottom: ${(props: H1Props) => (props.marginBottom 
    ? props.marginBottom
    : '0px')};
  
  @media screen and (max-width: ${SCREEN_RESOLUTIONS.mobileL}) {
    font-size: 18px;
  };
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const ContentWithCoinsOrNewsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  padding: 10px;
  margin: 0 auto;

  max-width: 800px;

  font-family: 'Neucha', cursive;

  transition: .5s ease-in-out;
`;
