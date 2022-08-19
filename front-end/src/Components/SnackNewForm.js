import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SnackNewForm() {
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: "",
    protein: "",
    added_sugar: "",
  });

  const newSnack = (snack) => {
    axios
      .post(`${API}/snacks`, snack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => console.warn("catch", error));
  };

  // HANDLERS
  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newSnack(snack);
  };

  return (
    <>
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={snack.name}
          onChange={handleTextChange}
          placeholder="Snack's name"
          required
        />
        <label htmlFor="image">Image: </label>
        <input
          id="image"
          type="text"
          value={snack.image}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          value={snack.fiber}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          value={snack.protein}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          value={snack.added_sugar}
          onChange={handleTextChange}
          required
        />
        <div>
          <input type="submit" />
          <Link to={`/snacks`}>
            <button>Back</button>
          </Link>
        </div>
        
      </form>
    </div>
    </>
  );
}