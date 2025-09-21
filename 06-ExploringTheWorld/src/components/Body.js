import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Search functionality And Filtered list of restuarants by maintaining 2 usestate variables
// const [listOfRestaurants, setListOfRestaurants] = useState([]); // this is for maintaining all data
// const [filteredRestaurant, setFilteredRestaurant] = useState([]); // this is for filtered data

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // This useEffect will be called after the component has been render.
  // useEffect is a React Hook that lets you run side effects in a functional component.
  // A side effect is anything that happens outside the normal rendering → like fetching data, updating the DOM manually, setting timers, or syncing with local storage.
  // 👉 Without useEffect, this fetch would run on every re-render → infinite loop.
  useEffect(() => {
    fetchData();
  }, []);


//   🌍 Problem
// You’re fetching data from Swiggy API directly in your React app.
// Swiggy’s server has CORS (Cross-Origin Resource Sharing) restrictions → it blocks requests coming directly from the browser.
// That’s why you tried corsproxy.io (a free proxy service).
// But free proxies often fail or return HTML → causing your JSON.parse error.

//   AllOrigins is a free public CORS proxy API.
// It fetches the data on its server and then sends it back to you, bypassing CORS restrictions.

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.allorigins.win/raw?url=" +
          encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6124447&lng=73.8781274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          )
      );

      const json = await res.json();
      console.log("Fetched JSON:", json);

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("❌ Fetch failed:", error);
    }
  };


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button 
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating.toString() > "4.1"
              );
              setFilteredRestaurant(filteredList);
              console.log(listOfRestaurants.res?.info?.avgRating)
            }}
          >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((value) => (
          <RestaurantCard key={value.info.id} resData={value} /> 
        ))}
      </div>
    </div>
  );
};

export default Body;
