import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");
  const[tag,setTag] = useState('car')

  function clickHandler() {
    fetchData();
  }

  async function fetchData() {
    setLoading(true);
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(URL);
    const imgURL = data.data.images.downsized_large.url;
    setGif(imgURL);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-1/2 h-fit bg-blue-200 rounded-md flex flex-col items-center justify-between py-3 border-2 border-black ">
      <h1 className="font-bold text-3xl underline uppercase">
        {tag} GIF
      </h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <img className="mt-4 " src={gif} width={450} />
      )}
      <input
        onChange={(e)=>setTag(e.target.value)}
        value={tag}
        className="w-11/12 py-3 my-4 rounded-md bg-black opacity-60 text-center text-white"
        type="text"
      />
      <button
        className=" bg-green-100 w-11/12 rounded-md py-3 text-large font-semibold"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
