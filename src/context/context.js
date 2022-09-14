import axios from "axios";
import React, { createContext, useState } from "react";
import Loader from "../Loader/Loader";

const BackData = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  axios
    .get("https://futurecommunication.pythonanywhere.com/api/v1/product")
    .then((res) => {
      if (res?.status == 200) {
        setLoading(false);
      }
      setData(res?.data?.results);
    });

  return (
    <BackData.Provider value={(data, setData, loading, setLoading)}>
      {children}
    </BackData.Provider>
  );
};

export default Context;
