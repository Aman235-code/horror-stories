import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";
import Navbar from "./components/Navbar";
import HorrorStories from "./pages/HorrorStories";
import ConspiraCies from "./pages/Conspiracies";
import ConspPage from "./pages/ConspPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen h-full bg-black bg-[url('/images/woods.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Router>
        <Navbar />
        <ScrollProgressBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horror" element={<HorrorStories />} />
          <Route path="/conspiracy" element={<ConspiraCies />} />
          <Route path="/story/horror/:slug" element={<StoryPage />} />
          <Route path="/story/conspiracy/:slug" element={<ConspPage />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
