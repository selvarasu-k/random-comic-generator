import React from 'react';
import "../../../index.scss";

const Comics = ({ comic }) => {
  return (
        <div className="root">
            <div className="num-and-title">
                <div className="numBer">{comic.comicNumber}</div>
                <div className="Title">{comic.comicTitle}</div>
            </div>
            <div className="image">
                <img src={comic.comicImage} alt={comic.comicAlt} />
            </div>
        </div>
  )
}

export default Comics;