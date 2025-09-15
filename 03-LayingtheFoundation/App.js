import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

// H1 tag without JSX
// const Heading = React.createElement("h1", { id: "heading" }, "Namaste React ");
// console.log(Heading);

// H1 tag with JSX
// JSX  - is not html in JS
// JSX  - is  HTML-Like Syntax Or XML-Like Syntax
// JSX (transpiled before it reaches the JS) transpiled by  -> PARCEL -> Babel
// How is this Running Happening ?
// JSX (transpiled to) => React.createElement => ReactElement-JS Object => HTMLElement(render)
// Babel is Converting this Code
// Explore various Attributes of JSX
// JSX attributes are camelCase
// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     Namaste React Using JSX{" "}
//   </h1>
// );

// For multiple lines we have to wrap  with ()
// const jsxHeading2 = (
//   <h1 id="heading" className="head" tabIndex="1">
//     Namaste React Using JSX
//   </h1>
// );
// --------------------------------------------------


// React Element
const elem = <span>React Element | </span>
const heading = (
  <h1 id="heading" className="head" tabIndex="1">
    {elem}
    Namaste React Using JSX
  </h1>
);


const Title = () => <h1>Title Component</h1>;
// also we can use normal function
const SubTitle = function () {
  return (
  <h1>
    Sub title component
</h1>);
};

// React Component
// 1.Class Based Component - OLD way
// 2.Functional Component - NEW Way✅

// this both are same.
// const fn = () => true;
// const fn2 = () => {
//     return true
// };

const number = 10000;

// If this Api is bad api or malicious api then 
// JSX also prevents such attacks and it sanitizes data before execution
// const data = api.getData()

// REACT FUNCTIONAL COMPONENT
// What is react functional component ?
// Its just a NORMAL js function
// A js function which returns an react element(JSX code).
// This both code are same
// const HeadingComponent = () => {
//     return <h1>Namaste React functional component.</h1>
// };
const HeadingComponent1 = () => (
  <div id="container">

    {/* Putting one component in an another component is component composition. */}
    {heading}
    <Title /> 
    <Title></Title>
    {Title()}
    
    {/* In this curly parantheses we can run any peice of JS Expression.  */}
    {number} 

    <h1 className="heading">Namaste React functional component.</h1>

  </div>
); // Industry standard.


const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how React element is rendered
// root.render(heading);  // react element

// This is how an React component is rendered
root.render(<HeadingComponent1 />);
