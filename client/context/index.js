import React, { useEffect, useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead,
  useContractEvents,
} from "@thirdweb-dev/react";

import {ethers} from 'ethers'


const index = () => {
  return <div></div>;
};

export default index;
