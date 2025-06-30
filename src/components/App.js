import TalkList from "./TalkList";
import TalkExpanded from "./TalkExpanded";
import initialTalks from "../data.js";

function App() {
  return (
    <div className="app-layout">
      <TalkList talks={initialTalks} />
      <button>Add talk 📢</button>
      <TalkExpanded talk={initialTalks[2]} />
    </div>
  );
}

export default App;
