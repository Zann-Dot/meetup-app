import { useState } from "react";
import EventsContent from "./EventsContent";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMainContent from "./HeaderMainContent";
import useFetch from "../useFetch";

export default function Homepage({ displayDarkMode, handleDarkMode }) {
  const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const { data, loading, error } = useFetch(`${VITE_API_URL}/events`);
  const [optionSelect, setOptionSelect] = useState(null);
  const [search, setSearch] = useState("");
  let filteredData = [];

  const handleSaveSearch = (e) => {
    if (e.key === "Enter") setSearch(e.target.value);
  };

  const filterBySearch = search
    ? data?.filter(
        (e) =>
          e.meetName.toLowerCase().split(" ").includes(search) ||
          e.eventTags.some((tags) => tags.toLowerCase() === search),
      )
    : data;

  if (optionSelect === "online") {
    filteredData = filterBySearch?.filter((e) => e.isOnline);
  } else if (optionSelect === "offline") {
    filteredData = filterBySearch?.filter((e) => !e.isOnline);
  } else {
    filteredData = filterBySearch;
  }

  return (
    <>
      <Header
        displayDarkMode={displayDarkMode}
        handleDarkMode={handleDarkMode}
        handleSaveSearch={handleSaveSearch}
      />
      <main className="px-12 py-5">
        <HeaderMainContent setOptionSelect={setOptionSelect} />
        <EventsContent filteredData={filteredData} />
      </main>
      <Footer />
    </>
  );
}
