import React, { useContext } from "react";
import './fooddisplay.css'
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/fooditem";

function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext);
    const filteredFoodList = food_list.filter(item => category === "All" || item.category === category);

    return (
       <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {
                    filteredFoodList.map((item, index) => {
                            return(
                                    <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                                )
                    })
                }
            </div>
       </div>
    );
}

export default FoodDisplay;