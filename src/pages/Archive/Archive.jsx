import "../../index.scss";

const Archive = () => {

  const comics = JSON.parse(localStorage.getItem("comics")) || [];

  return (
    <div className="main-view">
      {comics?.map((comic, index) => (
        <div key={index} className="display-view-content">
          <div className="left-view">
            <h2>{comic.comicNumber}</h2>
            <p>.</p>
            <h3>{comic.comicTitle}</h3>
          </div>
          <div className="right-view">
            <div className="vertical-line"></div>
            <div className="right-align">
              <div className="days-inline">
                <p className="one">Last viewed:</p>
              </div>
              <div className="days-inline">
                <span className="two">{comic.getDate}</span>
                <span className="two"> </span>
                <span className="two">{comic.getMonth}</span>
                <span className="two"> </span>
                <span className="two">{comic.getYear}</span>
              </div>
              <div className="days-inline">
                <span className="three">{comic.getHours}</span>
                <span className="three">:</span>
                <span className="three">{comic.getMinutes}</span>
                <span className="three">:</span>
                <span className="three">{comic.getSeconds}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Archive;