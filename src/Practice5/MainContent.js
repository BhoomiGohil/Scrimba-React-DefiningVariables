import React from "react";

export default function MainContent() {
  const nums = [1, 2, 3, 4, 5];

  const square = nums.map((value) => {
    return value * value + " ";
  });

  const names = ["alice", "bob", "charlie", "danielle"];

  const captialized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1) + " ";
  });

  const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

  const paragraphs = pokemon.map((mon) => {
    // return "<p>" + mon + "</p>";
    return `<p>${mon}</p>`;
  });

  return (
    <div>
      <h1> {square}</h1>
      <h1> {captialized}</h1>
      <h1> {paragraphs}</h1>
    </div>
  );
}
