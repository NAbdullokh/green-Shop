import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const BackData = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    axios
      .get("https://futurecommunication.pythonanywhere.com/api/v1/product")
      .then((res) => {
        if (res?.status == 200) {
          setLoading(false);
        }
        setData(res?.data?.results);
        setCurrent(res?.data?.results);
      });
  }, []);

  const getSearch = async (e) => {
    if (e !== "") {
      await axios
        .get(
          `https://futurecommunication.pythonanywhere.com/api/v1/product/?search=${e}`
        )
        .then((res) => setData(res?.data?.results));
    } else return setData(current);
  };

  console.log(data);
  return (
    <BackData.Provider
      value={{ data, setData, loading, setLoading, getSearch }}
    >
      {children}
    </BackData.Provider>
  );
};

export default Context;
