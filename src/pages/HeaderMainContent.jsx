export default function HeaderMainContent({ setOptionSelect }) {
  const handleOptionSelect = (e) => {
    setOptionSelect(e.target.value);
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-text-h dark:text-accent text-4xl font-medium">
        Meetup Events
      </h1>

      <div className=" py-2 px-3 text-accent bg-accent-bg border outline-0 border-accent-border rounded-3xl">
        <select
          name="type_select"
          className="outline-0"
          defaultValue={"Search Event Type"}
          onChange={handleOptionSelect}
        >
          <option hidden>Select event type</option>
          <option value="both">Both</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
    </div>
  );
}
