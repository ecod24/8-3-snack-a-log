import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.png"
import heartSolid from "../assets/heart-solid.png"

export default function Snack({ snack }) {
  return (
    <div className="Snack">
      <h4>
        {snack.name}
        {snack.is_healthy 
          ? 
          (<img src={heartSolid} alt='healthy food'/>) 
          : 
          (<img src={heartRegular} alt='unhealthy food' />)
        }
      </h4>
      <button>
        <Link to={`/snacks/${snack.id}`}>Snack details</Link>
      </button>
    </div>
  );
}