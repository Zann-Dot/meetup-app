import { Link } from "react-router";
import useFetch from "../useFetch";

export default function EventsContent({ filteredData }) {
  const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const { data, loading, error } = useFetch(`${VITE_API_URL}/events`);

  return (
    <div className="py-4 mt-4">
      {error && (
        <p className="text-center text-accent font-medium text-3xl">
          Opss! Error Occured
        </p>
      )}
      {loading && (
        <p className="text-center text-accent font-medium">Loading...</p>
      )}
      <div className="grid grid-cols-3 gap-8">
        {filteredData &&
          filteredData.length !== 0 &&
          filteredData.map((e) => (
            <div key={e._id} className="static">
              <span className="absolute z-10 text-text-h dark:text-dark-text-h bg-code-bg dark:bg-dark-social-bg  rounded-xl mt-1.5 ms-1.5 px-2">
                {e?.isOnline ? "Online" : "Offline"} Event
              </span>

              <div className="relative aspect-square group">
                <div className="bg-accent aspect-square rounded-lg blur-md opacity-40 hidden group-hover:block"></div>
                <Link to={`/events/${e._id}`}>
                  <img
                    src={e?.imageUrl}
                    alt={e?.meetName}
                    className="absolute inset-y-0 rounded-lg cursor-pointer aspect-square object-cover"
                  />
                </Link>
              </div>

              <p className="text-sm mt-2">{e?.sessionStartTime}</p>
              <h2 className="font-bold text-text-h dark:text-dark-text">
                {e?.meetName}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
