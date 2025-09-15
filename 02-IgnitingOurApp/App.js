import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From React!"
); //{} object is used to give attributes to html tags like id or class, etc.

console.log(heading); // This is object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

// root.render(heading);

// How to create nested elements & siblings
/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am h1 tag</h1>
 *      <h1>I am h1 sibling tag</h1>
 *  </div>
 *  <div id="child2">
 *      <h1>I am h1 tag</h1>
 *      <h1>I am h1 sibling tag</h1>
 *  </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// converts to an array to create siblings of elements
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1-1" }, "I am h1 Tag"),
    React.createElement("h2", { key: "h2-1" }, "I am h2 sibling Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "I am h1 Tag"),
    React.createElement("h2", { key: "h2-2" }, "I am h2 sibling Tag"),
  ]),
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(parent);
