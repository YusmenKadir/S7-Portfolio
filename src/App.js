import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import IndividualProject from "./components/IndividualProject";
import InternationalProject from "./components/InternationalProject";
import GroupProject from "./components/GroupProject";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individual-project" element={<IndividualProject />}>
          <Route path="/individual-project/project-plan" />
          <Route path="/individual-project/process" />
        </Route>
        <Route
          path="/international-project"
          element={<InternationalProject />}
        />
        <Route path="/group-project" element={<GroupProject />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
