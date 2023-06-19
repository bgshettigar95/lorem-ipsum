import { useState } from "react";
import textList from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value < 1 || e.target.value > 8) {
      return;
    }
    setCount(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText(textList.slice(0, count));
  };

  return (
    <main className="section-center">
      <h4>Tired of Boring Lorem Ipsum</h4>
      <form className="lorem-form">
        <label>Paragraphs: </label>
        <input
          type="number"
          value={count}
          onChange={handleChange}
          min={1}
          max={8}
        />
        <button type="submit" className="btn" onClick={onSubmit}>
          Generate
        </button>
      </form>
      {text.map((para) => {
        const id = nanoid();
        return <p key={id}>{para}</p>;
      })}
    </main>
  );
};
export default App;
