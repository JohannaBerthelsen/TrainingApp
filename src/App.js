import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <Router>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<StartPage/>} />
      </Routes>
    </Router>
  
  );
}

export default App;
