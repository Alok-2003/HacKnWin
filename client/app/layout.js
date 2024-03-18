"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

//Internal Import
import { useStateContext } from "../context";

const layout = () => {
  const {address,connect,contract,realEstate} = useStateContext();
  return <div>{realEstate}</div>;
};

export default layout;
