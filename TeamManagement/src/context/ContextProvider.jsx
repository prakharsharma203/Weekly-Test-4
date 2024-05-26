import { createContext, useState } from "react";
import { data } from "../data/data";
import propType from "prop-types";

export const Context = createContext();

let updatedData = data.map((ele) => {
  return {...ele, curr: false}
});

// console.log(updatedData)`

const ContextProvider = ({ children }) => {
  const [empData, setEmpData] = useState(updatedData);
  const [team, setTeam] = useState([]);
  return <Context.Provider value={{ empData, team, setTeam, setEmpData }}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
    children: propType.node,
}

export default ContextProvider;