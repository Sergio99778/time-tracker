import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import compponents
import { Header } from "./components/Header";
// import pages
import { Projects } from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
