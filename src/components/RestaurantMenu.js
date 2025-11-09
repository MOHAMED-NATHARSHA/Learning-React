import { useState, useEffect} from "react";
import { MENU_API_URL } from "../utils/constants";
import { SWIGGY_IMG_URL } from "../utils/constants";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useFetchResMenu from "../utils/useFetchResMenu";



const RestaurantMenu = ()=>{
    const menuItems = useFetchResMenu();
    

if (menuItems === null) {
  return <Shimmer/>
}

    
    const filteredInfoCards = menuItems?.cards.filter((card)=>
        card?.card?.card?.info !== undefined
    );
    


    let {name,cloudinaryImageId,costForTwoMessage,cuisines} = filteredInfoCards[0]?.card?.card?.info;

    

const resMenucards = menuItems?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards


    // const {name,costForTwoMessage,cloudinaryImageId,cuisines} = menuItems?.cards[2]?.card?.card?.info;
    
    

//    const {name,cloudinaryImageId,costForTwoMessage,cuisines} = menuItems?.cards[2]?.card?.card?.info;

   



    return(
        <div className="restaurant-menu-container">
            <div className="restaurant-menu-card">
                <div className="restaurant-menu-image-container">
                    <h1>{name}</h1>
                    <img className="restaurant-menu-image" src={SWIGGY_IMG_URL + cloudinaryImageId} />
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                  
                </div>
                <div className="restaurant-menu-details-container">

                    <ul>
                        <li>
                            {resMenucards.map((itemcard)=>{

                                const item = itemcard.card.info
                                return (
                                    <div key={item.id}>
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        <p>{item.price}</p>
                                    </div>
                                )
                            })}
                        </li>
                        
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;