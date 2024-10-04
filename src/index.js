import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
// Select the root element from the DOM where the React application will be rendered
const rootElement = document.querySelector("#root");

// Check if the root element exists; throw an error if it doesn't
if (!rootElement) throw new Error("Failed to find the root h1");

// Create a root for the React application using the selected root element
const root = createRoot(rootElement);

// Render the MainContent component into the root
root.render(<MainContent />);
