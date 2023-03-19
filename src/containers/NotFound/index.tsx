import { H1 } from '@/GlobalStyles';
import {
  NotFoundContainer,
  NotFoundWrapper,
} from './NotFoundStyles';

const NotFound = () => (
  <NotFoundWrapper>
    <NotFoundContainer>
      <H1>
        Page not found
      </H1>
    </NotFoundContainer>
  </NotFoundWrapper>
);

export default NotFound;
