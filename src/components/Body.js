import {restaurantList} from "../utils/mockapi";
import Restaurantcardcomponent from "./Restaurantcard";


const BodyComponent = () => (
    <div className="body-component-container p-5">
        <div className="search-container"></div>
        <div className="restaurant-list-container">
          {restaurantList.map((restaurant)=>(
            <Restaurantcardcomponent key = {restaurant.data.id} {...restaurant.data} />
          ))}
            
        </div>
    </div>
)
export default BodyComponent;