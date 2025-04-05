import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import StartPage from "./pages/StartPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  
  );
}

export default App;
