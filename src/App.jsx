import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Project1 from "./pages/singleProject/Project1";
import Project2 from "./pages/singleProject/Project2";
import Project3 from "./pages/singleProject/Project3";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="/projects/project3" element={<Project3 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
