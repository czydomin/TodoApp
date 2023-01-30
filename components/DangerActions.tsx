import Button from "./Button";

function DangerActions() {
  return (
    <div className="danger-section">
      <Button variant="red" title="Delete done tasks"></Button>
      <Button variant="red" title="Delete all tasks"></Button>
    </div>
  );
}
export default DangerActions;
