import {
  Routes,
  Route,
} from "react-router-dom";

import { ResetCSS } from "./GlobalStyles";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { routes } from './routes';

import { RouteProps } from './types';

const App = () => (
  <>
    <ResetCSS/>
    <Header />
    <Routes>
      {routes
        .map(({
          path,
          element,
          index,
          }: RouteProps,
          routeIndex,
        ) => (
          <Route
            key={`routeIndex--${routeIndex}`}
            path={path}
            element={element()}
            index={index}
          />
      ))}
    </Routes>
    <Footer />
  </>
);

export default App;
