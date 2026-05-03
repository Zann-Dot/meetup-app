import { useState } from "react";
import EventsContent from "./EventsContent";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMainContent from "./HeaderMainContent";
import useFetch from "../useFetch";

export default function Homepage({ displayDarkMode, handleDarkMode }) {
  const [optionSelect, setOptionSelect] = useState(null);
  let filteredData = [];
  const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const { data, loading, error } = useFetch(`${VITE_API_URL}/events`);

  if (optionSelect === "online") {
    filteredData = data?.filter((e) => e.isOnline);
  } else if (optionSelect === "offline") {
    filteredData = data?.filter((e) => !e.isOnline);
  } else {
    filteredData = data;
  }

  return (
    <>
      <Header
        displayDarkMode={displayDarkMode}
        handleDarkMode={handleDarkMode}
      />
      <main className="px-12 py-5">
        <HeaderMainContent setOptionSelect={setOptionSelect} />
        <EventsContent filteredData={filteredData} />
      </main>
      <Footer />
    </>
  );
}
