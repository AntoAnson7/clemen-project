// SIZE : 800 x 480
import Patient from "./pages/Patient/Patient";
import Login from "./pages/Login/Login";
import PatientDetails from "./pages/PatientDetails/PatientDetails";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patient/id" element={<PatientDetails />} />{" "}
          {/*After building backend should be /patient/:id */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
