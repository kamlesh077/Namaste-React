import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Search functionality And Filtered list of restuarants by maintaining 2 usestate variables
// const [listOfRestaurants, setListOfRestaurants] = useState([]); // this is for maintaining all data
// const [filteredRestaurant, setFilteredRestaurant] = useState([]); // this is for filtered data

// Do not Do things for useState
// Never create this state variable outside the function component
// always try to call this hooks on the top of component
// Never create your useState hook inside if-Else, for-loop, function,

// State variables are mean't to create only inside the functional component at higher level

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

  const fetchData = async () => {
    try {
      const data = await fetch(
        // "https://api.allorigins.win/raw?url=" +  // cors issue
        //   encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6124447&lng=73.8781274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // )
      );

      const json = await data.json();
      console.log("Fetched JSON:", json);

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

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
            console.log(listOfRestaurants.res?.info?.avgRating);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((value) => (
          <Link key={value.info.id} to={"/restaurants/" + value.info.id}>
            <RestaurantCard  resData={value} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
