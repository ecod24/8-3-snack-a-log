import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function SnackDetails() {
  

  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((error) => console.log(error));
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  return (
    <>
      
        <h2>{snack.name}</h2>
        <h4>Fiber: {snack.fiber}</h4>
        <h4>Protein: {snack.protein}</h4>
        <h4>Added sugar: {snack.added_sugar}</h4>
        
        
          <button>
            Back
          </button>
          <button>
            Delete
          </button>
          <button
            href={`/snacks/${id}/edit`}
          > 
            Edit 
          </button>
    </>
  );
}