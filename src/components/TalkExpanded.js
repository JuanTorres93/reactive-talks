function TalkExpanded({ talk }) {
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

        <button>Add new attendant</button>
      </div>
    </div>
  );
}

export default TalkExpanded;
