import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import IndividualProject from "./components/IndividualProject";
import InternationalProject from "./components/InternationalProject";
import GroupProject from "./components/GroupProject";
import DocumentsPage from "./components/Documents";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmpathisePage from "./components/EmpathisePage";
import DefinePage from "./components/DefinePage";
import IdeatePage from "./components/IdeatePage";
import PrototypePage from "./components/PrototypePage";
import TestPage from "./components/TestPage";
import SoftwarePage from "./components/SoftwarePage";
import ReflectionPage from "./components/ReflectionPage";
import PeerReviewPage from "./components/PeerReviewPage";
import StakeholderAppreciationPage from "./components/StakeholderAppreciation";
import RecommendationsPage from "./components/RecommendationsPage";
import PortfilioResearchPage from "./components/PortfilioResearchPage";
import PortfilioReflectionPage from "./components/PortfolioReflectionPage";
import PortfolioTestPage from "./components/PortfolioTestPage";
import PortfolioPrototypePage from "./components/PortfolioPrototypePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/individual-project"
          element={<IndividualProject />}
        ></Route>
        <Route path="/individual-project/project-plan" />
        <Route
          path="/individual-project/research"
          element={<PortfilioResearchPage />}
        />
        <Route path="/individual-project/prototype" element={<PortfolioPrototypePage/>}/>
        <Route
          path="/individual-project/reflection"
          element={<PortfilioReflectionPage />}
        />
        <Route
          path="/individual-project/test"
          element={<PortfolioTestPage />}
        />
        <Route
          path="/international-project"
          element={<InternationalProject />}
        />
        <Route path="/group-project" element={<GroupProject />} />
        <Route path="/group-project/empathise" element={<EmpathisePage />} />
        <Route path="/group-project/define" element={<DefinePage />} />
        <Route path="/group-project/ideate" element={<IdeatePage />} />
        <Route path="/group-project/prototype" element={<PrototypePage />} />
        <Route path="/group-project/test" element={<TestPage />} />
        <Route
          path="/group-project/software-system"
          element={<SoftwarePage />}
        />
        <Route path="/group-project/reflection" element={<ReflectionPage />} />
        <Route path="/group-project/peer-review" element={<PeerReviewPage />} />
        <Route
          path="/group-project/stakeholder-appreciation"
          element={<StakeholderAppreciationPage />}
        />
        <Route
          path="/group-project/project-recommendations"
          element={<RecommendationsPage />}
        />

        <Route path="/documents" element={<DocumentsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
