import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// inline css in jsx style attribute takes object

// what is component ? Its normal JS Function
// what is props ?
// Similarly > Props are just normal arguments to a function.
// Config driven UI





const AppLayout = () => {
  return (
  <div className="app">
    {/* // Component Composition */}
    <Header />  
    <Body/>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)

