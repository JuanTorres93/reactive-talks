import Talk from "./Talk";

function TalkList({ talks }) {
  return (
    <ul className="talk-list">
      {talks.map((talk) => (
        <Talk key={talk.id} talk={talk} />
      ))}
    </ul>
  );
}

export default TalkList;
