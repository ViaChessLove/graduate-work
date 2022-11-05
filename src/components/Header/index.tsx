import {
  H1,
  Placeholder,
} from "../../GlobalStyles";
import * as header from "./HeaderStyles";

import { HEADER_MESSAGES } from "./messages";

const Header = () => {
  const {
    title,
    links,
  } = HEADER_MESSAGES;
  return (
    <>
      <header.HeaderWrapper>
        <header.HeaderContent>
          <header.HeaderRoute to='/'>
            <H1>
                { title }
            </H1>
          </header.HeaderRoute>
          <header.HeaderRoutes>
            {links.map(({ title, container}, linkIndex) => (
              <header.HeaderRoute
                to={ container }
                key={`id--link--${linkIndex}`}
              >
                { title }
              </header.HeaderRoute>
            ))}
          </header.HeaderRoutes>
        </header.HeaderContent>
      </header.HeaderWrapper>
      <Placeholder
        height={'40px'}
        className={''}
      />
    </>
  )
}

export default Header;
