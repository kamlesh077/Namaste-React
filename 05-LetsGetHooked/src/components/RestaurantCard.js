import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // Destructuring
  const { resData } = props;

  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info
  
  return (
    <div className="res-card" >
      <div className="res-logo-container">
        <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{avgRating} stars</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} minutes</h6>
    </div>
  ) 
}

export default RestaurantCard; 

