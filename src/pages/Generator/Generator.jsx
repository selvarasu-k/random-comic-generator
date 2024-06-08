import React, { useCallback, useEffect, useState } from "react";
import Comics from "./Comics/Comics";
import { getRequest } from "../../http";
import "../../index.scss";

const Generator = () => {

  const [comics, setComics] = useState(
    JSON.parse(localStorage.getItem("comics")) || []
  );

  const [loading, setLoading] = useState(false);

  let d = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateComics = useCallback(() => {
    setLoading(true);
    const fetchComics = async () => {
      const newComics = [];

      for (let i = 0; i < 4; i++) {
        let comicId;
        
        do {
          comicId = Math.floor(Math.random() * 1000) + 1;
        } while (
          comics.some((comic) => comic.comicNumber === comicId) ||
          newComics.some((comic) => comic.comicNumber === comicId)
        );

        const responseComicData = await getRequest("https://xkcd.vercel.app/?comic=" + comicId);

        const storeComics = {
            comicNumber: responseComicData.num,
            comicTitle: responseComicData.title,
            comicImage: responseComicData.img,
            comicAlt: responseComicData.alt,
            getYear: d.getFullYear(),
            getMonth: months[d.getMonth()],
            getDate: d.getDate(),
            getHours: d.getHours(),
            getMinutes: d.getMinutes(),
            getSeconds: d.getSeconds(),
        }
        newComics.push(storeComics);
      }

      setComics((prevComics) => {
        const updatedComics = [...prevComics, ...newComics];

        localStorage.setItem("comics", JSON.stringify(updatedComics));
        return updatedComics;
      });
      setLoading(false);
    };

    fetchComics();
  }, [comics]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    generateComics();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="root-element">
      <div className="elements">
          <button className="button-data" onClick={generateComics}>
            Generate
          </button>
      </div>
      <div className="elements">
        <div className="wrap">
            <div className="output">
              {comics?.map((comic, index) => (
                <Comics key={index} comic={comic} />
              ))}
            </div>
        </div>
      </div>
      <div className="loading-spinner-block">
        {loading && <div className="loading-spinner"></div>}
      </div>
    </div>
  );
};

export default Generator;