function Form({ label1, label2, submitText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-box">
        <label htmlFor="input1">{label1}</label>
        <input type="text" id="input1" required />
      </div>

      <div className="form__input-box">
        <label htmlFor="input2">{label2}</label>
        <textarea id="input2" required></textarea>
      </div>

      <button type="submit">{submitText}</button>
    </form>
  );
}

export default Form;
