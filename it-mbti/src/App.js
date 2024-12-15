import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage"; 
import LoadingPage from "./pages/LoadingPage";
import Header from "./layout/header";
import Footer from "./layout/footer";


function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

