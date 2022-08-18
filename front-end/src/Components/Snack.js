import { Link } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <div className="Snack">
      <h4>{snack.name}</h4>
      <button>
        <Link to={`/snacks/${snack.id}`}>Show details</Link>
      </button>
    </div>
  );
}