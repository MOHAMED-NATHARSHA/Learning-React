import { RESTAURANT_IMG_URL,SWIGGY_IMG_URL} from "../utils/constants";    

const Restaurantcardcomponent = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return (
     
     <>   
    <div className="restaurant-card-container m-3 p-3">
        <div className="restaurant-image-container">
            <a href="/">
                <img src={SWIGGY_IMG_URL + cloudinaryImageId} alt="Restaurant" className="restaurant-image" />
            </a>
        </div>
        <div className="restaurant-details-container">
            <h3 className="restaurant-name">{name.toUpperCase()}</h3>
            <p className="restaurant-cuisine">{cuisines.join()}</p>
            <p className="restaurant-rating">Rating: {avgRating}</p>
        </div>
    </div>
    </>
)};

export default Restaurantcardcomponent;
