import React, { useEffect, useContext, createContext} from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead,
  useContractEvents,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract("0x415bB92dA2D1839f716703E4ca87d53d31fc9DD9");
  console.log(contract)
  const address = useAddress();
  const connect = useMetamask();

  const realEstate = "Real Estate DApp"

  return(
    <StateContext.Provider value={{address, connect, contract,realEstate}}>
        {children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);