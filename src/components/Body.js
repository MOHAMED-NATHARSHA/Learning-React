
import Restaurantcardcomponent from "./Restaurantcard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";


function filterData(a){
  const filterdata = a.filter((res)=>res.info.avgRating > 4);
  return filterdata;
}
function filtername(a,b){
  const filtername = a.filter((res)=>res.info.name.includes(b))
  return filtername;
}



const BodyComponent = () => {
    const [restaurants, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchApiData()
        
    }, []);

    const fetchApiData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
       
        const listPath = json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
       
       setRestaurantList(listPath);
        
    }
   
   
    
 
//card.gridElements.infoWithStyle.restaurants
 
    //card.gridElements.infoWithStyle.restaurants

return(
    <div className="body-component-container p-5">
        <div className="search-container">
          {/* <SearchBarComponent /> */}
          <input className="search-input" type="text" placeholder="Search for restaurants" onChange={(e)=>{

            let filterres = filtername(restaurants,e.target.value);
            
            setRestaurantList(filterres);
            if(e.target.value === ""){
              setRestaurantList(restaurantList);
            }
            
          }}/>
          <button className="search-btn m-3" onClick={()=>{
            let filterres = filterData(restaurants);
            setRestaurantList(filterres);

          }}>Search</button>
        </div>
        <div className="restaurant-list-container">
          {restaurants.map((restaurant)=>(
              
            <Restaurantcardcomponent key = {restaurant.info.id} {...restaurant.info} />
          ))}
            
        </div>
    </div>
)}
export default BodyComponent;

