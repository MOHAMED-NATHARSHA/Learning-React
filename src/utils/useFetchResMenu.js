import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "./constants";
import Error from "../components/Error";


const useFetchResMenu = () => {

    const [menuItems, setMenuItems] = useState(null);
    const { resId } = useParams();
useEffect(()=>{
    fetchResInfo();
}
, []);
const fetchResInfo = async () => {

    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();

    setMenuItems(json.data);
};

    return menuItems;
}
export default useFetchResMenu;