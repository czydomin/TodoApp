function Task({ message }: any) {
  return (
    <div className="task-container">
      <p className="task-text">{message}</p>
      <div>
        <input className="checkbox" type="checkbox"></input>
        <button className="editbtn">
          <img
            className="pen"
            src="https://icones.pro/wp-content/uploads/2022/07/symbole-de-crayon-jaune.png"
          ></img>
        </button>
        <button className="editbtn">
          <img
            className="pen"
            src="https://icon-library.com/images/red-recycle-bin-icon/red-recycle-bin-icon-20.jpg"
          ></img>
        </button>
      </div>
    </div>
  );
}

export default Task;
