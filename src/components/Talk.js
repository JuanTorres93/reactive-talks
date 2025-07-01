function Talk({ talk, onSelectTalk }) {
  const handleClick = () => {
    onSelectTalk(talk);
  };

  return (
    <li className="talk">
      <h3 className="talk__title">{talk?.title || "Unkown name"}</h3>

      <p className="description">
        {talk?.shortDescription || "Unkown description"}
      </p>

      <span>🧑‍🤝‍🧑 {talk?.attendants?.length ?? "??"}</span>
      <button onClick={handleClick}>Detail 👉</button>
    </li>
  );
}

export default Talk;
