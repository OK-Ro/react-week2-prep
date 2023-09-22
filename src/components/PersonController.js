import React, { useState, useEffect } from "react";
import fetchRandomUser from "./Api";
import Person from "./Person";

function PersonController() {
  const [personData, setPersonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const randomUser = await fetchRandomUser();
        const { name, email } = randomUser;
        setPersonData({ name, email });
      } catch (error) {
        console.error("Error fetching random user", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="PersonController">
      <Person person={personData} />
    </div>
  );
}

export default PersonController;
