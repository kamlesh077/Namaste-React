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

    # React Hooks
    (Normal JS Utility Functions)
    - useState() - Superpowerful State Variables in react 
    - useEffect()


# 2 types of Routing in web Apps
    Client Side Routing (CSR)
    Server Side Routing (SSR)
- createBrowserRouter, RouterProvide, Link, Error page,  useRouteError, error element