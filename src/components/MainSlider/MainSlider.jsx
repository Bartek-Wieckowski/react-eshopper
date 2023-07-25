import "./main-slider.css";
import { mainSlider } from "../../utils/constants";

export default function MainSlider() {
  return (
    <div>
      {mainSlider.map((item) => (
        <img src={item.src} />
      ))}
    </div>
  );
}
