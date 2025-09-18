import React from "react";
import ReactDOM from "react-dom/client";

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


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://th.bing.com/th/id/OIP.Wb-8yZSEcDdWde-lmugL5wAAAA?w=179&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

// inline css in jsx style attribute takes object
const styleCard = {
  backgroundColor: "#d4ccccff"
}
// what is component ? Its normal JS Function
// what is props ?
// Similarly > Props are just normal arguments to a function.
// Config driven UI
const RestaurantCard = (props) => {
  // Destructuring
  const { resData } = props;

  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info
  
  return (
    <div className="res-card" style={styleCard}>
      <div className="res-logo-container">
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
          cloudinaryImageId} 
        />
      </div>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{avgRating} stars</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla.deliveryTime} minutes</h6>
    </div>
  ) 
}

const resList = [
                  {
                    "info": {
                      "id": "585036",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/04ac7780-1b36-4a36-97af-ca0384be4c0a_585036.JPG",
                      "locality": "Kamalraj Nishigandh",
                      "areaName": "Dhanori",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.1,
                      "parentId": "721",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1.7K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-18 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/pizza-hut-kamalraj-nishigandh-dhanori-rest585036",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "188935",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/1e963273-74d7-476f-a652-5e0fa31cae9a_188935.JPG",
                      "locality": "Viman Nagar",
                      "areaName": "Viman Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "6.9K+",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 10.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "10.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "25% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "638"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/theobroma-viman-nagar-rest188935",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "725893",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "Kasturbawadi",
                      "areaName": "Vishrantwadi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "61955",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.0K+",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-18 00:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/chinese-wok-kasturbawadi-vishrantwadi-rest725893",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "751151",
                      "name": "Olio - The Wood Fired Pizzeria",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6af1783d-8722-46e4-b952-dd73cd38b583_751151.JPG",
                      "locality": "2nd Phase",
                      "areaName": "Dhanori",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "11633",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 55,
                        "lastMileTravel": 9.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "9.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/olio-the-wood-fired-pizzeria-2nd-phase-dhanori-rest751151",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "250667",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/e41a97cf-7940-4d7a-8426-051e0d71f9ab_250667.JPG",
                      "locality": "Phoenix Market city",
                      "areaName": "Viman Nagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "5588",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "735",
                      "sla": {
                        "deliveryTime": 55,
                        "lastMileTravel": 10.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "10.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/baskin-robbins-ice-cream-desserts-phoenix-market-city-viman-nagar-rest250667",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "401108",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/cf8e955a-69b7-482a-ae52-489613724036_401108.JPG",
                      "locality": "Datta Nagar",
                      "areaName": "Bhosari",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2456",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.5K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/dominos-pizza-datta-nagar-bhosari-rest401108",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "826664",
                      "name": "Pastas By Pizza Hut",
                      "cloudinaryImageId": "67d17abfeb3a5da6103b9424f6dbe973",
                      "locality": "Kamalraj Nishigandh",
                      "areaName": "Dhanori",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pastas"
                      ],
                      "avgRating": 3.5,
                      "parentId": "306806",
                      "avgRatingString": "3.5",
                      "totalRatingsString": "51",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-18 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/pastas-by-pizza-hut-kamalraj-nishigandh-dhanori-rest826664",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "639450",
                      "name": "Dum Safar Biryani",
                      "cloudinaryImageId": "yy0ss5asuswm2xamoqsx",
                      "locality": "Samrat Ashok Road",
                      "areaName": "Kalyani Nagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "North Indian",
                        "Barbecue"
                      ],
                      "avgRating": 4.4,
                      "parentId": "351013",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "853",
                      "sla": {
                        "deliveryTime": 58,
                        "lastMileTravel": 9.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "9.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:30:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/dum-safar-biryani-samrat-ashok-road-kalyani-nagar-rest639450",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "608346",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/36d43518-bbf0-4dbb-a7b6-2be463c042d4_608346.JPG",
                      "locality": "Lohagaon",
                      "areaName": "Aero-Mall",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "630",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "7.6K+",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 8.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "8.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-18 03:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/mcdonalds-lohagaon-aero-mall-rest608346",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "16064",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/12099616-b774-4b95-a147-6782551a460e_16064.JPG",
                      "locality": "Viman Nagar",
                      "areaName": "Viman Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Rolls & Wraps",
                        "Fast Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "17K+",
                      "sla": {
                        "deliveryTime": 64,
                        "lastMileTravel": 10.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "60-70 mins",
                        "lastMileTravelString": "10.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 22:30:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹799",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "4.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/kfc-viman-nagar-rest16064",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "678576",
                      "name": "Blue Tokai Coffee Roasters",
                      "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
                      "locality": "Lohegaon",
                      "areaName": "Viman Nagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Cafe",
                        "Coffee",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "2682",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "472",
                      "sla": {
                        "deliveryTime": 56,
                        "lastMileTravel": 8.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "8.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {},
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "102"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/blue-tokai-coffee-roasters-lohegaon-viman-nagar-rest678576",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "36366",
                      "name": "Sweet Truth - Cake and Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/a9d32449-96c9-4ddb-9536-fa5efe84c98f_36366.jpg",
                      "locality": "NEAR INDRAYANI NAGAR",
                      "areaName": "Bhosari",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "4444",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "2.3K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 7.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "7.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:59:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/sweet-truth-cake-and-desserts-near-indrayani-nagar-bhosari-rest36366",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "725894",
                      "name": "Big Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_725894.JPG",
                      "locality": "Kasturbawadi",
                      "areaName": "Vishrantwadi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "434792",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "730",
                      "sla": {
                        "deliveryTime": 54,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-18 00:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/big-bowl-kasturbawadi-vishrantwadi-rest725894",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "625864",
                      "name": "Taco Bell",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/61087bef-ed0b-48b0-a238-c7419fd7c699_625864.JPG",
                      "locality": "Vascon Mariplex Mall",
                      "areaName": "Kalyani Nagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Mexican",
                        "Fast Food",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "parentId": "1557",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.4K+",
                      "sla": {
                        "deliveryTime": 75,
                        "lastMileTravel": 10.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "70-80 mins",
                        "lastMileTravelString": "10.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-18 02:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹125"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.7",
                          "ratingCount": "140"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/taco-bell-vascon-mariplex-mall-kalyani-nagar-rest625864",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "642728",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/b6575157-eec0-4f9c-a333-ee6ece218353_642728.jpg",
                      "locality": "Mhada Colony",
                      "areaName": "Aero Mall Viman Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.2,
                      "parentId": "2",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "3.9K+",
                      "sla": {
                        "deliveryTime": 53,
                        "lastMileTravel": 8.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "8.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-18 05:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/subway-mhada-colony-aero-mall-viman-nagar-rest642728",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "62973",
                      "name": "LunchBox - Meals and Thalis",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/b037f4fd-9cce-4ba7-8e4b-d423298b578f_62973.jpg",
                      "locality": "NEAR INDRAYANI NAGAR",
                      "areaName": "Bhosari",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Thalis",
                        "North Indian",
                        "Biryani"
                      ],
                      "avgRating": 4.3,
                      "parentId": "4925",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "9.6K+",
                      "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 7.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "7.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/lunchbox-meals-and-thalis-near-indrayani-nagar-bhosari-rest62973",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "33328",
                      "name": "Faasos - Wraps, Rolls & Shawarma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/18827930-450c-4e26-a680-bee1a38f4228_33328.JPG",
                      "locality": "NEAR INDRAYANI NAGAR",
                      "areaName": "Bhosari",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "21809",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 7.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "7.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Rolls.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/faasos-wraps-rolls-and-shawarma-near-indrayani-nagar-bhosari-rest33328",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "686339",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/bef0f5e6-d495-4170-ad2a-48974e234095_686339.jpg",
                      "locality": "SURVEY NUMBER-225",
                      "areaName": "Viman Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.6K+",
                      "sla": {
                        "deliveryTime": 60,
                        "lastMileTravel": 8.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "8.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-18 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/the-belgian-waffle-co-survey-number-225-viman-nagar-rest686339",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "156448",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/700eac20-237f-45ba-9bcb-e6eb55f7d086_156448.jpg",
                      "locality": "Jay Ganesh Samrajya",
                      "areaName": "Bhosari",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "7918",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "3.0K+",
                      "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 7.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "7.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/the-good-bowl-jay-ganesh-samrajya-bhosari-rest156448",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "720361",
                      "name": "Wendy's Burgers",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4cd26da2-be14-46f4-bb6c-da1247b2ce0d_720361.JPG",
                      "locality": "A wing",
                      "areaName": "Lohegaon",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "parentId": "972",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.9K+",
                      "sla": {
                        "deliveryTime": 55,
                        "lastMileTravel": 10.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "10.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-17 23:59:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "25% OFF",
                        "subHeader": "ABOVE ₹3000",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f0518094-3f71-443c-a628-9cb5dda1dfca"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/wendys-burgers-a-wing-lohegaon-rest720361",
                      "type": "WEBLINK"
                    }
                  }
]

const Body = () => {
   return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Passing argument to the function */}
        {/* Passing Props to the component */}
        {/* Always you have to give a KEY while mapping becoz react doesn't need to rerender all items, by adding key react can uniquely identify and render that particular component only.*/}
        {/* Never use indexes as a key react says */}
        {/* not using keys (not acceptable) <<<< index as key <<<<<<<< unique id (Best practice) */}
        {resList.map((value) => (
          <RestaurantCard key={value.info.id} resData={value} />
        ))}
      </div>
    </div>
   );
}

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

