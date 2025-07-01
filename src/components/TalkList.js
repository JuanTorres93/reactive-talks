import Talk from "./Talk";

function TalkList({ talks, onSelectTalk }) {
  return (
    <ul className="talk-list">
      {talks.map((talk) => (
        <Talk key={talk.id} talk={talk} onSelectTalk={onSelectTalk} />
      ))}
    </ul>
  );
}

export default TalkList;
