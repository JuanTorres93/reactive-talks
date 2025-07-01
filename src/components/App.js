import { useState, useEffect, use } from "react";
import TalkList from "./TalkList";
import TalkExpanded from "./TalkExpanded";
import FormNewTalk from "./FormNewTalk.js";
import initialTalks from "../data.js";

function App() {
  const [talks, setTalks] = useState(initialTalks);
  const [selectedTalk, setSelectedTalk] = useState(null);
  const [showFormNewTalk, setShowFormNewTalk] = useState(false);
  const [showNewAttendantForm, setShowNewAttendantForm] = useState(false);

  const handleAddTalk = (newTalk) => {
    setTalks((prevTalks) => [...prevTalks, newTalk]);
    setShowFormNewTalk(false);
  };

  const handleSelectTalk = (talk) => {
    setSelectedTalk((curTalk) => (curTalk?.id === talk.id ? null : talk));
  };

  const handleShowNewTalkForm = () => {
    setShowFormNewTalk((prev) => !prev);
    setShowNewAttendantForm(false);
  };

  const handleShowNewAttendantForm = () => {
    setShowNewAttendantForm((prev) => !prev);
    setShowFormNewTalk(false);
  };

  const handleAddAttendant = (attendant) => {
    if (!selectedTalk) return;

    setTalks((curTalks) =>
      curTalks.map((talk) =>
        talk.id === selectedTalk.id
          ? { ...talk, attendants: [...talk.attendants, attendant] }
          : talk
      )
    );

    setSelectedTalk((curTalk) => ({
      ...curTalk,
      attendants: [...curTalk.attendants, attendant],
    }));

    setShowNewAttendantForm(false);
  };

  useEffect(() => {}, [talks]);

  return (
    <div className="app-layout">
      <TalkList talks={talks} onSelectTalk={handleSelectTalk} />
      {showFormNewTalk && <FormNewTalk onSubmit={handleAddTalk} />}
      <button onClick={handleShowNewTalkForm}>
        {showFormNewTalk ? "Close ❌" : "Add talk 📢"}
      </button>
      {selectedTalk && (
        <TalkExpanded
          talk={selectedTalk}
          showForm={showNewAttendantForm}
          onShowForm={handleShowNewAttendantForm}
          onAddAttendant={handleAddAttendant}
        />
      )}
    </div>
  );
}

export default App;
