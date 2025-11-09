import Restaurantcardcomponent from "./Restaurantcard";
import {
  useState,
  useEffect,
} from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent =
  () => {
    const [
      restaurants,
      setRestaurantList,
    ] = useState(
      []
    );
  
    const [
      filteredRestaurants,
      setFilteredRestaurantList,
    ] = useState(
      []
    );
    const [
      searchText,
      setSearchText,
    ] =
      useState("");
    function filterData(
      a
    ) {
      const filterdata =
        a.filter(
          (res) =>
            res.info
              .avgRating >
            4.5
        );
      return filterdata;
    }
    useEffect(() => {
      fetchApiData();
    }, []);

    const fetchApiData =
      async () => {
        const data =
          await fetch(
            SWIGGY_API_URL
          );
        const json =
          await data.json();
          
        const cardsData = json?.data?.cards
       
        const listPath = cardsData.find((cards)=>cards?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length>0)
        const restaurantcardPath = listPath?.card?.card?.gridElements?.infoWithStyle?.restaurants;

     

        setRestaurantList(
          restaurantcardPath || []
        );
        setFilteredRestaurantList(
          restaurantcardPath || []
        );
      };

    if (
      restaurants.length ===
        0 ||
      filteredRestaurants.length ===
        0
    ) {
      return (
        <Shimmer />
      );
    }

    return filteredRestaurants.length ===
      0 ||
      restaurants.length ===
        0 ? (
      <Shimmer />
    ) : (
      <div className="body-component-container p-5">
        <div className="search-container">
          {/* <SearchBarComponent /> */}
          <input
            className="search-input"
            type="text"
            value={
              searchText
            }
            placeholder="Search for restaurants"
            onChange={(
              e
            ) => {
              setSearchText(
                e
                  .target
                  .value
              );
            }}
          />
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              const searchres =
                restaurants.filter(
                  (
                    res
                  ) =>
                    res.info.name
                      .toUpperCase()
                      .includes(
                        searchText.toUpperCase()
                      )
                );
              setFilteredRestaurantList(
                searchres
              );
            }}
          >
            Search
          </button>
          <button
            className="search-btn m-3"
            onClick={() => {
              let filterres =
                filterData(
                  restaurants
                );
              setFilteredRestaurantList(
                filterres
              );
            }}
          >
            Top
            Rated
            Restaurant
          </button>
        </div>
        <div className="restaurant-list-container">
          {filteredRestaurants.map(
            (
              restaurant
            ) => (
              <Link
                className="linkClass m-auto shadow w-300"
                to={`/restaurant/${restaurant.info.id}`}
                key={
                  restaurant
                    .info
                    .id
                }
              >
                <Restaurantcardcomponent
                  {...restaurant.info}
                />
              </Link>
            )
          )}
        </div>
      </div>
    );
  };
export default BodyComponent;
