import { useState } from "react";

function FormNewAttendant({ onAddAttendant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();

    const newAttendant = {
      id,
      name,
      image:
        image === "https://i.pravatar.cc/48"
          ? image + `?u=${id}`
          : image.trim(),
    };

    onAddAttendant(newAttendant);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-box">
        <label htmlFor="name">👱 Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form__input-box">
        <label htmlFor="image">🖼️ Image</label>
        <input
          id="image"
          value={image}
          placeholder="Enter image URL"
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add attendant</button>
    </form>
  );
}

export default FormNewAttendant;
