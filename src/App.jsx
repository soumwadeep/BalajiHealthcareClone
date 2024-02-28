import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Departments from "./pages/Departments";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/contact" element={<Doctors />} />
        <Route exact path="/t/:id" element={<Departments />} />
        <Route exact path="/404" element={<PageNotFound />} />
        {/* <Route exact path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
