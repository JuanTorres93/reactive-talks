import TalkList from "./components/TalkList";

const initialTalks = [
  {
    id: 1,
    title: "The future of AI in everyday life.",
    description:
      "Artificial Intelligence is rapidly transforming our daily lives, from smart home devices to advanced healthcare solutions. This talk explores the potential and challenges of AI integration.",
    attendants: 35,
  },
  {
    id: 2,
    title: "Understanding quantum computing.",
    description:
      "Quantum computing represents a significant leap in computational power, enabling us to solve complex problems that are currently beyond the reach of classical computers.",
    attendants: 15,
  },
  {
    id: 3,
    title: "What you need to know about snakes.",
    description:
      "Snakes are fascinating creatures that have been around for millions of years. They play a crucial role in the ecosystem and have unique adaptations that allow them to thrive in various environments.",
    attendants: 235,
  },
];

function App() {
  return (
    <div className="app-layout">
      <TalkList talks={initialTalks} />
    </div>
  );
}

export default App;
