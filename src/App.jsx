import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import About from "./componentes/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
