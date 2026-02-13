import { useState, useRef } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DownloadPage from "./pages/DownloadPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [pageHistory, setPageHistory] = useState(["home"]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const communityRef = useRef(null);
  const githubRef = useRef(null);

  const navigateTo = (page) => {
    setPageHistory((prev) => [...prev, page]);
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setPageHistory((prev) => {
      if (prev.length <= 1) return prev;
      const newHistory = prev.slice(0, -1);
      setCurrentPage(newHistory[newHistory.length - 1]);
      return newHistory;
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      <Navigation
        navigateTo={navigateTo}
        currentPage={currentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {currentPage === "home" && (
        <HomePage
          navigateTo={navigateTo}
          communityRef={communityRef}
          githubRef={githubRef}
        />
      )}

      {currentPage === "download" && (
        <DownloadPage goBack={goBack} />
      )}

      <Footer />
    </div>
  );
}




