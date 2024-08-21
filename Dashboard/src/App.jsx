import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegestrationForm from "./components/RegestrationForm";
import { TabNavBar } from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<RegestrationForm />} />
          <Route path="/dashboard" element={<TabNavBar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
