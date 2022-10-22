import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ResetCSS } from "./GlobalStyles";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Coins from "./containers/Coins";
import News from "./containers/News";

const App = () => {
  return (
    <BrowserRouter>
      <ResetCSS/>
      <Header />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
