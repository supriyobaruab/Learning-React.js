import React, { useState } from "react";

export default function TextForm(props) {
  //Handler
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking ", "success");
  };
  const handleUpclick = () => {
    console.log("Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const ChangeHandler = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const clearDisplay = () => {
    setText("");
    props.showAlert("Cleared the text", "success");
  };
  //Main code begin
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h1>{props.header}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={ChangeHandler}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearDisplay}>
          Clear
        </button>
        <button type="submit" onClick={speak} className="btn btn-warning">
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters in the
          text
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Write something to preview here"}</p>
      </div>
    </>
  );
}
