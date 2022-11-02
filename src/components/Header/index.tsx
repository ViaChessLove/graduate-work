import { Link } from "react-router-dom";
import {
  H1,
  Placeholder,
} from "../../GlobalStyles";
import {
  HeaderContent,
  HeaderRoute,
  HeaderRoutes,
  HeaderWrapper,
} from "./HeaderStyles";

import { HEADER_MESSAGES } from "./messages";

const Header = () => {
  const {
    title,
    links,
  } = HEADER_MESSAGES;
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <HeaderRoute to='/'>
            <H1>
                { title }
            </H1>
          </HeaderRoute>
          <HeaderRoutes>
            {links.map(({ title, container}, linkIndex) => (
              <HeaderRoute
                to={ container }
                key={`id--link--${linkIndex}`}
              >
                { title }
              </HeaderRoute>
            ))}
          </HeaderRoutes>
        </HeaderContent>
      </HeaderWrapper>
      <Placeholder
        height={'40px'}
        className={''}
      />
    </>
  )
}

export default Header;
