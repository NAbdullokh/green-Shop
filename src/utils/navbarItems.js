import GenericPage from "../Generic/GenericPage";

export const NavbarItems = [
  {
    id: 1,
    hidden: false,
    title: "Home",
    path: "/home",
    element: <GenericPage />,
  },
  {
    id: 2,
    hidden: false,
    title: "Shop",
    path: "/shop",
    element: <GenericPage />,
  },
  {
    id: 3,
    hidden: false,
    title: "Plant Care",
    path: "/plant",
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
];
