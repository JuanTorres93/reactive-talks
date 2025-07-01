import FormNewAttendant from "./FormNewAttendant";

function TalkExpanded({ talk, showForm, onShowForm, onAddAttendant }) {
  const handleClick = (e) => {
    onShowForm();
  };

  return (
    <div className="talk-expanded">
      <h2 className="talk-expanded__title">{talk?.title || "Unkown title"}</h2>
      <div className="talk-expanded__content">
        <em className="description talk-expanded_description">
          {talk?.description}
        </em>
        {/* <span className="talk__attendants">Attendants: {talk?.attendants}</span> */}
        <div className="talk-expanded__attendants">
          {talk?.attendants?.length > 0 ? (
            talk.attendants.map((attendant) => (
              <img
                key={attendant.id}
                src={attendant.image}
                alt={attendant.name}
                title={attendant.name}
              />
            ))
          ) : (
            <span className="talk-expanded__attendants-title">
              No attendants
            </span>
          )}
        </div>

        {showForm && (
          <FormNewAttendant
            label1="👱 Name"
            label2="🖼️ Image"
            submitText="Add attendant"
            onAddAttendant={onAddAttendant}
          />
        )}
        <button onClick={handleClick}>
          {showForm ? "Close ❌" : "🙋 Add attendant"}
        </button>
      </div>
    </div>
  );
}

export default TalkExpanded;
