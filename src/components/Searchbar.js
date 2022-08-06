import React from 'react'
import { useState } from 'react';

const Searchbar = ({ setClickedCourse }) => {
  const [inputClass, setinputClass] = useState("Enter the 3 digit class code");

  const handleSubmit = (e) => {
    if (inputClass.length === 3) {setClickedCourse(inputClass);}
    e.preventDefault();
  };
  
  return (
    <form onSubmit={(e) => { handleSubmit(e)}}>
      <input
        name="userInput" id="searchbar" type="text" value={inputClass}
        onClick={() => setinputClass("")}
        onChange={(e) => setinputClass(e.target.value)}
      />
      <input type="submit" value="Search for a class" />
    </form>
  );
};

export default Searchbar