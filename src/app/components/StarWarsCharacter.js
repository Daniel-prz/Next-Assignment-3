"use client";
import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = "https://swapi.dev/api/people/1/";

export default function StarWarsCharacter() {
  const [name, setname] = useState("");
  const [height, setheight] = useState("");
  const [gender, setgender] = useState("");
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState("");
  useEffect(() => {
    setisloading(true);
    async function fetchCharacterData() {
      try {
        const response = await axios.get(baseURL);
        setname(response.data.name);
        setheight(response.data.height);
        setgender(response.data.gender);
      } catch (error) {
        seterror("Something went wrong");
        console.log(error);
      } finally {
        setisloading(false);
      }
    }
    fetchCharacterData();
  }, []);
  if (isloading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  return (
    <div>
      <ul className="CharacterAttributes">
        <li>Star Wars Character: {name}</li>
        <li>Height: {height}</li>
        <li>Gender: {gender}</li>
      </ul>
    </div>
  );
}
