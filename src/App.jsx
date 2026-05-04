import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import EventDetailsPage from "./pages/EventDetailsPage";
import "./App.css";

function App() {
  const [displayDarkMode, setDisplayDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDisplayDarkMode(!displayDarkMode);
    document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("dark:bg-dark-bg");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              displayDarkMode={displayDarkMode}
              handleDarkMode={handleDarkMode}
            />
          }
        />
        <Route
          path="/events/:eventId"
          element={
            <EventDetailsPage
              displayDarkMode={displayDarkMode}
              handleDarkMode={handleDarkMode}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
