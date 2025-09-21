Though Process to build Apps
1. Planning
    - What you're going to build ?
    - What is the Process of Building it?
    - UI design, layout , wireframe, mock (How your app should look like.)


Config driven UI

// Props Class
/**
 *  Header
 *    - Logo
 *    - Nav Items
 * Body 
 *    - Search 
 *    - RestaurantContainer
 *      - RestaurantCard
 *        - Image
 *        - Name of Res
 *        - Star Rating
 *        - Cuisine
 *        - Delivery Time
 * Footer 
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact 
 *  */ 

TWO TYPES OF EXPORT / IMPORT
-Default Export/Import

    export default Compoent;
    import Component from "path"


    -Named Export/Import

    export const Component;
    import {Component} from "path";



    
  // Conditional rendering 
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }

  // Whenever state variable update, react triggers a reconciliation Cycle (re render the Component)
  console.log("Body rendered");
  // Also this condition can be written by using ternary operator

      // Optional chaining -> allows you to write code which can immediately stop running expressions when it hits a null or undefined