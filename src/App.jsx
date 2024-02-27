import { Navigate, Route, Routes } from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import Doctors from "./pages/Doctors"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/contact" element={<Doctors />} />
        {/* <Route exact path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  )
}

export default App
