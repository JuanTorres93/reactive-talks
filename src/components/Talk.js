function Talk({ talk }) {
  return (
    <li className="talk">
      <h3 className="talk__title">{talk?.title || "Unkown name"}</h3>

      <p>{talk?.description || "Unkown description"}</p>

      <span>🧑‍🤝‍🧑 {talk?.attendants || "??"}</span>
      <button>Detail 👉</button>
    </li>
  );
}

export default Talk;
