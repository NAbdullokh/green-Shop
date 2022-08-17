import AllFlowers from "../components/AllFlowers";
import GenericPage from "../Generic/GenericPage";
import HomePage from "../pages/Home";

export const NavbarItems = [
  {
    id: 1,
    hidden: false,
    title: "Home",
    path: "/home",
    element: <HomePage />,
  },
  {
    id: 2,
    hidden: false,
    title: "Shop",
    path: "/shop",
    element: <AllFlowers />,
  },
  {
    id: 3,
    hidden: false,
    title: "Favorites",
    path: "/favorites",
    element: <GenericPage />,
  },
  {
    id: 4,
    hidden: false,
    title: "Blogs",
    path: "/blogs",
    element: <GenericPage />,
  },
  {
    id: 5,
    hidden: true,
    title: "Cart",
    path: "/cart",
    element: <GenericPage />,
  },
  {
    id: 6,
    hidden: true,
    title: "Login",
    path: "/login",
    element: <GenericPage />,
  },
  {
    id: 5,
    hidden: true,
    title: "Profile",
    path: "/profile",
    element: <GenericPage />,
  },
  {
    id: 5,
    hidden: true,
    title: "Add",
    path: "/add",
    element: <GenericPage />,
  },
];
