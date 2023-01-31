import { useState } from "react";
import Button from "./Button";

function NewTask({ onAdd }: any) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="container">
      <div className="firstline">
        <img
          className="image"
          src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
        ></img>
        <input
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          value={inputText}
          className="inputtask"
          placeholder="New Todo"
        />
      </div>
      <Button
        onClick={() => {
          onAdd(inputText);
          setInputText("");
        }}
        title="Add new task"
      />
    </div>
  );
}
export default NewTask;
