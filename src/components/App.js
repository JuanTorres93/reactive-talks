import TalkList from "./TalkList";
import TalkExpanded from "./TalkExpanded";
import Form from "./Form.js";
import initialTalks from "../data.js";

function App() {
  return (
    <div className="app-layout">
      <TalkList talks={initialTalks} />
      <Form label1="🖊️ Title" label2="🔠 Description" submitText="Add talk" />
      <button>Add talk 📢</button>
      <TalkExpanded talk={initialTalks[2]} />
    </div>
  );
}

export default App;
