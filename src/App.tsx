import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ResetCSS } from "./GlobalStyles";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { routes } from './routes';

import { RouteProps } from './types';

const App = () => {
  return (
    <BrowserRouter>
      <ResetCSS/>
      <Header />
      <Routes>
        {routes
        .map(({
          path,
          element,
          }: RouteProps,
          routeIndex) => (
          <Route
            key={routeIndex}
            path={path}
            element={element()}
          />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
