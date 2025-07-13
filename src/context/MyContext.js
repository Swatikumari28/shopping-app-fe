import { useContext } from "react";
import { createContext } from "react";

const MyContext = createContext();
const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContext, useMyContext };
