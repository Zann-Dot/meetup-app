import Footer from "./Footer";
import Header from "./Header";
import HeaderMainContent from "./HeaderMainContent";

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="px-12 py-5">
        <HeaderMainContent />
      </main>
      <Footer />
    </>
  );
}
