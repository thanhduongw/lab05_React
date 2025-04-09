import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects ";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <div className="bg-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
          <Sidebar />
        </div>
        <div className="flex-grow-1">
          <Header />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/integrations" element={<Integrations />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
