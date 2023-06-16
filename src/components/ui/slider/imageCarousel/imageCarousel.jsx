import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useState } from "react";

import { Box, Stack } from "@mui/material";

import style from "./imageCarousel.styles";

const ImageCarousel = ({ nodes }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Stack width={"100%"}>
      <div className="keen-slider" ref={sliderRef}>
        {nodes.map((item) => item)}
      </div>

      {loaded && instanceRef.current && (
        <Stack direction={"row"} justifyContent={"center"} sx={style.dotsSx()}>
          {[
            ...Array(instanceRef.current.track.details?.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={currentSlide === idx ? " active" : ""}
              ></button>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};

export default ImageCarousel;
// {nodes?.map((item,index) => (
//     <div ref={sliderRef} className="keen-slider" key={`imageCarousel_${index}`}>
//       {item}
//     </div>
//   ))}
