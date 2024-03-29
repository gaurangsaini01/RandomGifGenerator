import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {
  const randomURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");

  async function fetchData(tag) { 
    setLoading(true);
    const { data } = await axios.get(tag ? tagURL : randomURL);
    const imgURL = data.data.images.downsized_large.url;
    setGif(imgURL);
    setLoading(false);
  }

  useEffect(() => {
    fetchData('car');
  }, []);

  return { gif, loading, fetchData };
}

export default useGif;
