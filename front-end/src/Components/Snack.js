import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.png"
import heartSolid from "../assets/heart-solid.png"

export default function Snack({ snack }) {
  return (
    <article className="Snack">
      <h4>
        {snack.name}</h4>
        {snack.is_healthy 
          ? 
          (<img src={heartSolid} alt='healthy food'/>) 
          : 
          (<img src={heartRegular} alt='unhealthy food' />)
        }
      
      <div className="snack__image"><img src={snack.image} alt={snack.name} /></div>
      <button>
        <Link to={`/snacks/${snack.id}`}>Snack details</Link>
      </button>
    </article>
  );
}