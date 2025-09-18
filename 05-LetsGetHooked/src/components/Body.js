import RestaurantCard  from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


// State Variable - Super powerful variable - for that we use a React Hooks-(normal JS Utility function)there are 2 main hooks i.e 
// useState(), -  Superpowerful State Variables in react
// Def- Whenever a state varibale updates react re-renders the component. 
// useEffect()


const Body = () => {
  // Local State Variable - Super powerful variable
  // setListOfRestaurants is a function and is used to update this list
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // This is similar it's just array destructuring.
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];


  // let listOfRestaurants = null  - normal js varibale 

  // Normal JS Variable 
  let listOfRestaurantsJS = [
                  {
                    "info": {
                      "id": "585034",
                      "name": "MCD",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/04ac7780-1b36-4a36-97af-ca0384be4c0a_585036.JPG",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.1,
                      "sla": {
                        "deliveryTime": 30,
                      }
                    },
                  },
                  {
                    "info": {
                      "id": "585035",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/04ac7780-1b36-4a36-97af-ca0384be4c0a_585036.JPG",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.8,
                      "sla": {
                        "deliveryTime": 30,
                      }
                    },
                  },
                  {
                    "info": {
                      "id": "585036",
                      "name": "Dominos",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/04ac7780-1b36-4a36-97af-ca0384be4c0a_585036.JPG",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.2,
                      "sla": {
                        "deliveryTime": 30,
                      }
                    },
                  }
  ]


   return (
    <div className="body">
      <div className="filter"> 
        <button className="filter-btn" onClick={() => { 
          const filteredList = listOfRestaurants.filter( res => res.info.avgRating > 4.4); 
          setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((value) => (
          <RestaurantCard key={value.info.id} resData={value} />
        ))}
      </div>
    </div>
   );
}

export default Body;
// 1.45 time rewatch