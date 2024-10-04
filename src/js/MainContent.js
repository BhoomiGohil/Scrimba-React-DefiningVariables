import React from "react";

// Define and export the MainContent functional component
export default function MainContent() {
  // Initialize an array of numbers
  const nums = [1, 2, 3, 4, 5];

  // Use the map function to create an array of squared values
  const square = nums.map((value) => {
    return value * value + " "; // Return the square of each number, followed by a space
  });

  // Initialize an array of names
  const names = ["alice", "bob", "charlie", "danielle"];

  // Use the map function to create an array of capitalized names
  const captialized = names.map((name) => {
    // Capitalize the first letter and concatenate it with the rest of the name
    return name[0].toUpperCase() + name.slice(1) + " "; // Return the capitalized name followed by a space
  });

  // Initialize an array of Pokémon names
  const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

  // // Use the map function to create an array of HTML paragraph elements for each Pokémon
  // const paragraphs = pokemon.map((mon) => {
  //   // Return a string representing an HTML paragraph with the Pokémon name
  //   return `<p>${mon}</p>`; // Use template literals for cleaner syntax
  // });

  // Render the component
  return (
    <div>
      <h1> {square}</h1> {/* Display the squared numbers */}
      <h1> {captialized}</h1> {/* Display the capitalized names */}
      {/* Render each paragraph as an actual <p> element */}
      {pokemon.map((mon, index) => (
        <p key={index}>
          <button>{mon}</button>
        </p>
      ))}
    </div>
  );
}
