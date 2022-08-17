import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";

export const secondNavItems = [
  { id: 1, img: <AiOutlineHome />, path: "/home", title: "Home" },
  { id: 2, img: <AiOutlineHeart />, path: "/favorites", title: "Favorites" },
  { id: 3, img: <GrAddCircle />, path: "/add", title: "Add" },
  { id: 4, img: <RiShoppingCart2Line />, path: "/cart", title: "Cart" },
  { id: 5, img: <BsPerson />, path: "/profile", title: "Profile" },
];
