import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

// inline css in jsx style attribute takes object

// what is component ? Its normal JS Function
// what is props ?
// Similarly > Props are just normal arguments to a function.
// Config driven UI


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> 
      {/* All the children routes comes in this outlet  component 
      -Outlet is filled with the component that has passed as childrens
      */} 
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
