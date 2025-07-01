import { useState } from "react";

function FormNewTalk({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTalk = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      shortDescription:
        description.length > 70
          ? description.slice(0, 70) + "..."
          : description,
      attendants: [],
    };

    onSubmit(newTalk);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-box">
        <label htmlFor="name">🖊️ Title</label>
        <input
          type="text"
          id="name"
          placeholder="Enter talk title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form__input-box">
        <label htmlFor="description">🔠 Description</label>
        <textarea
          id="description"
          value={description}
          placeholder="Enter talk description"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit">Add talk</button>
    </form>
  );
}

export default FormNewTalk;
