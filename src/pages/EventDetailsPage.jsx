import { useParams } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from "../useFetch";

export default function EventDetailsPage({ displayDarkMode, handleDarkMode }) {
  const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const { data, loading, error } = useFetch(`${VITE_API_URL}/events`);
  const { eventId } = useParams();

  const event = data?.find((e) => e._id === eventId);

  return (
    <>
      <Header
        displayDarkMode={displayDarkMode}
        handleDarkMode={handleDarkMode}
      />
      {data && event ? (
        <main className="px-12 pt-7 pb-14">
          <h1 className="text-text-h dark:text-accent text-4xl font-medium mb-5">
            {event?.meetName}
          </h1>
          Hosted by:
          <p className="text-xl font-medium text-text-h dark:text-dark-text-h">
            {event?.hosted}
          </p>
          <div className="flex">
            <div className="w-600 h-100">
              <img
                src={event?.imageUrl}
                alt="meetImage"
                className="my-4 aspect-4/3"
              />
              <h1 className="my-4 text-2xl font-medium text-text-h dark:text-dark-text-h">
                Event Tags:
              </h1>
              <div className="flex gap-4">
                {event &&
                  event.eventTags.map((et) => (
                    <span
                      key={et}
                      className="bg-accent dark:bg-dark-accent-bg dark:border dark:border-accent-border px-3 py-2 text-bg rounded-lg text-sm cursor-pointer hover:scale-102 dark:hover:bg-dark-accent-border"
                    >
                      {et}
                    </span>
                  ))}
              </div>
            </div>

            <div className="ms-8">
              <h1 className="text-2xl font-medium text-text-h dark:text-dark-text-h">
                Details:
              </h1>
              <p className="text-text dark:text-dark-text">{event?.details}</p>
              <h1 className="my-4 text-2xl font-medium text-text-h dark:text-dark-text-h">
                Additional Information:
              </h1>
              <ul>
                {event &&
                  Object.keys(event?.additionalInfo).map((k) => (
                    <li key={k} className="text-text dark:text-dark-text">
                      <b className="text-text-h dark:text-dark-text-h">
                        {k.charAt(0).toUpperCase() + k.slice(1)}
                      </b>
                      : {event?.additionalInfo[k]}
                    </li>
                  ))}
              </ul>
              <div className="text-text-h dark:text-dark-text bg-code-bg dark:bg-dark-social-bg p-5 rounded-lg my-4">
                <section className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    height="19px"
                    width="19px"
                    fill={displayDarkMode ? "#9ca3af" : "#6b6375"}
                    className="grid content-center"
                  >
                    <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                  </svg>
                  {event?.sessionStartTime} to {event?.sessionEndTime}
                </section>
                <br />
                <section className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    width="20px"
                    viewBox="0 -960 960 960"
                    fill={displayDarkMode ? "#9ca3af" : "#6b6375"}
                  >
                    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                  {event?.eventVenue}
                </section>

                {event?.isPaid && (
                  <>
                    {" "}
                    <br />
                    <p>₹ {event?.paidRupees}</p>
                  </>
                )}
              </div>
              <h1 className="my-4 text-2xl font-medium text-text-h dark:text-dark-text-h">
                Speakers: ({event?.speakers.length})
              </h1>
              <div className="flex gap-10">
                {event?.speakers.length !== 0 &&
                  event?.speakers.map((s) => (
                    <div
                      key={s._id}
                      className="aspect-square flex flex-col items-center w-60 bg-code-bg dark:bg-dark-code-bg rounded-2xl p-8 shadow-lg"
                    >
                      <img
                        src={s.imageUrl}
                        alt="profile picture"
                        className="rounded-full mb-3"
                      />
                      <p className="text-text-h dark:text-dark-text-h font-bold">
                        {s.name}
                      </p>
                      <p className="text-center">{s.designation}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        loading && (
          <p className="text-accent font-medium text-center my-7">loading...</p>
        )
      )}

      <Footer />
    </>
  );
}
