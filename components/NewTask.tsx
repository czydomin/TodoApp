import Button from "./Button";

function NewTask() {
  return (
    <div className="container">
      <div className="firstline">
        <img
          className="image"
          src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
        ></img>
        <input className="inputtask" placeholder="New Todo" />
      </div>
      <Button title="Add new task" />
    </div>
  );
}
export default NewTask;
