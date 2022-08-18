import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;
console.log(API)
export default function Snacks() {

  const [snacks, setSnacks] = useState([]);
  const getData = async () => {
    const { data } = await axios(`${API}/snacks/`);
    setSnacks(data.payload);
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${API}/snacks/`)
  //     .then(({ data }) => setSnacks(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
    {console.log(snacks)}
    {snacks.map((snack) => {
      return <Snack key={snack.id} snack={snack} />;
    })}
    </>
  );
}