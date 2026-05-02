import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [displayDarkMode, setDisplayDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDisplayDarkMode(!displayDarkMode);
    document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("dark:bg-dark-bg");
  };

  return (
    <nav className="p-5 bg-social-bg dark:bg-dark-code-bg shadow-sm flex justify-between items-center">
      <Link
        to="/"
        className="text-text dark:text-dark-text font-sans text-2xl ps-7 grow-0"
      >
        Meetup App
      </Link>

      <div className="flex flex-row order-last items-center">
        <div className="flex justify-center items-center px-1.5 bg-bg dark:bg-dark-social-bg border border-border dark:border-dark-border rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="17px"
            width="17px"
            viewBox="0 -960 960 960"
            fill={displayDarkMode ? "#9ca3af" : "#6b6375"}
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <input
            type="search"
            className="px-1 pb-1 placeholder:text-sm text-text-h dark:text-dark-text outline-0"
            placeholder="Search by title or tags"
            id="search_bar"
          />
        </div>

        <span>
          <button
            onClick={handleDarkMode}
            className="cursor-pointer ms-2 px-1.25 py-1 bg-bg dark:bg-dark-border rounded-full"
          >
            {displayDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#e3e3e3"
                className=""
              >
                <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm98 382q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Zm283.5-56.5Q640-413 640-480t-46.5-113.5Q547-640 480-640t-113.5 46.5Q320-547 320-480t46.5 113.5Q413-320 480-320t113.5-46.5ZM480-480Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#6b6375"
              >
                <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
              </svg>
            )}
          </button>
        </span>
      </div>
    </nav>
  );
}
