import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
   const{gif,loading,fetchData} = useGif();
 
  return (
    <div className="w-1/2 h-fit bg-green-500 rounded-md flex flex-col items-center justify-between py-3 border-2 border-black ">
      <h1 className="font-bold text-3xl underline uppercase">Random GIF</h1>
      {loading?<Spinner></Spinner>:<img className="mt-4 mb-4" src={gif} width={450} />}
      <button
        className=" bg-green-100 w-11/12 rounded-md py-3 text-large font-semibold"
        onClick={()=>fetchData()}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
