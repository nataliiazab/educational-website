import React, { useState } from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.jpg";
import gallery_2 from "../../assets/gallery-2.jpg";
import gallery_3 from "../../assets/gallery-3.jpg";
import gallery_4 from "../../assets/gallery-4.jpg";
import gallery_5 from "../../assets/gallery-5.jpg";
import gallery_6 from "../../assets/gallery-6.jpg";
import gallery_7 from "../../assets/gallery-7.jpg";
import gallery_8 from "../../assets/gallery-8.jpg";
import white_arrow from "../../assets/white-arrow.png";

function Campus() {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="campus">
      <div className="gallery">
        {showMore ? (
          <>
            <img src={gallery_5} alt="Gallery 5" />
            <img src={gallery_6} alt="Gallery 6" />
            <img src={gallery_7} alt="Gallery 7" />
            <img src={gallery_8} alt="Gallery 8" />
          </>
        ) : (
          <>
            <img src={gallery_1} alt="Gallery 1" />
            <img src={gallery_2} alt="Gallery 2" />
            <img src={gallery_3} alt="Gallery 3" />
            <img src={gallery_4} alt="Gallery 4" />
          </>
        )}
      </div>
      <button className="btn dark-btn" onClick={handleClick}>
        See more <img src={white_arrow} alt="" />
      </button>
    </div>
  );
}

export default Campus;
