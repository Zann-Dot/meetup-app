import useFetch from "../useFetch";

export default function EventsContent() {
  const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const { data, loading, error } = useFetch(`${VITE_API_URL}/events`);
  console.log(data);
  return (
    <div className="py-4 grid grid-cols-3 gap-8 mt-4">
      {error && (
        <p className="text-center text-accent font-medium text-3xl">
          Opss! Error Occured
        </p>
      )}
      {loading && (
        <p className="text-center text-accent font-medium">Loading...</p>
      )}
      {data &&
        data.length !== 0 &&
        data.map((e) => (
          <div key={e._id} className="static">
            <span className="absolute text-text-h dark:text-dark-text-h bg-code-bg dark:bg-dark-social-bg  rounded-xl mt-1.5 ms-1.5 px-2">
              {e?.isOnline ? "Online" : "Offline"} Event
            </span>

            <img
              src={e?.imageUrl}
              alt={e?.meetName}
              className="rounded-lg cursor-pointer aspect-square object-cover"
            />

            <p className="text-sm mt-2">{e?.sessionStartTime}</p>
            <h2 className="font-bold text-text-h dark:text-dark-text">
              {e?.meetName}
            </h2>
          </div>
        ))}
      {/* <div className="static">
        <span className="absolute text-text-h dark:text-dark-text-h bg-code-bg dark:bg-dark-social-bg  rounded-xl mt-1.5 ms-1.5 px-2">
          Offline Event
        </span>
        <section className="">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="rounded-lg cursor-pointer"
          />
        </section>
        <p className="text-sm mt-2">Mon August 12 2024 at 05:00:00 PM</p>
        <h2 className="font-bold text-text-h dark:text-dark-text">
          Marketing Strategies 2024
        </h2>
      </div> */}
    </div>
  );
}
