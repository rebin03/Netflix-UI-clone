import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  //   useEffect(() => {
  //     axios
  //       .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
  //       .then((response) => {
  //         console.log(response.data.results[0]);
  //         setMovie(response.data.results[0]);
  //         setLoaded(true);
  //       });
  //   }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      changeBanner();
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  const changeBanner = () => {
    setLoaded(false);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(
          response.data.results[count % response.data.results.length]
        );
        setMovie(response.data.results[count % response.data.results.length]);
        setLoaded(true);

        // console.log("thissssssss:"+response.data.results.length);
      });
  }, [count]);

  return (
    <div
      className={`banner ${loaded ? "fade-in" : "fade-out"}`}
      style={{
        backgroundImage: `url(${imageUrl + movie.backdrop_path})`,
        // opacity: loaded ? 1 : 0,
        // transition: "opacity 1s ease",
      }}
      //   className="banner"
    >
      <div className="content">
        <h1 className="title">{movie.title || movie.name}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <p className="description">{movie.overview}</p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
