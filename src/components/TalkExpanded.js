function TalkExpanded({ talk }) {
  return (
    <div className="talk-expanded">
      <h2 className="talk-expanded__title">{talk?.title || "Unkown title"}</h2>
      <div className="talk-expanded__content">
        <em className="description talk-expanded_description">
          {talk?.description}
        </em>
        {/* <span className="talk__attendants">Attendants: {talk?.attendants}</span> */}

        {/* TODO View attendants */}
      </div>
    </div>
  );
}

export default TalkExpanded;
