import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;