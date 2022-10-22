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
    coins,
    news,
  } = HEADER_MESSAGES;
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <H1>
            { title }
          </H1>
          <HeaderRoutes>
            <HeaderRoute to="/">
              { coins }
            </HeaderRoute>
            <HeaderRoute to="/news">
              { news }
            </HeaderRoute>
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
