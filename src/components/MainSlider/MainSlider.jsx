import "./main-slider.css";
import { mainSlider } from "../../utils/constants";
import { useEffect, useState } from "react";

export default function MainSlider() {
  const [index, setIndex] = useState(0);

  useEffect(
    function () {
      const lastIndex = mainSlider.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    },
    [index, mainSlider]
  );

  useEffect(
    function () {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 6500);
      return () => {
        clearInterval(slider);
      };
    },
    [index]
  );

  return (
    <div className="slider">
      <div className="slides">
        {mainSlider.map((itemImg, itemIndex) => {
          let position = "nextSlide";
          if (itemIndex === index) {
            position = "activeSlide";
          }
          if (itemIndex === index - 1 || (index === 0 && itemIndex === mainSlider.length - 1)) {
            position = "lastSlide";
          }

          return (
            <div key={itemImg.id} className={`slide ${position}`}>
              <img src={itemImg.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
