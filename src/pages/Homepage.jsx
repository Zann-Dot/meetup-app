import EventsContent from "./EventsContent";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMainContent from "./HeaderMainContent";

export default function Homepage({ displayDarkMode, handleDarkMode }) {
  return (
    <>
      <Header
        displayDarkMode={displayDarkMode}
        handleDarkMode={handleDarkMode}
      />
      <main className="px-12 py-5">
        <HeaderMainContent />
        <EventsContent />
      </main>
      <Footer />
    </>
  );
}
