import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useState } from "react";

import { Box, Stack, useTheme } from "@mui/material";

import style from "./tweenSlider.styles";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const TweenSlider = ({ nodes }) => {
  const theme = useTheme();

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      breakpoints: {
        "(min-width: 450px) and (max-width: 600px)": {
          slides: { perView: 3, spacing: 4 },
        },

        "(min-width: 300px) and (max-width: 450px)": {
          slides: { perView: 2, spacing: 4 },
        },
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <Stack width={"100%"} sx={style.sliderWrapperSx(theme)}>
      <Box ref={sliderRef} className="keen-slider">
        {nodes.map((item, index) => (
          <Box className="keen-slider__slide " key={index}>
            {item}
          </Box>
        ))}
      </Box>

      <Box ref={thumbnailRef} className="keen-slider " mt={"10px"}>
        {nodes.map((item, index) => (
          <Box
            className="keen-slider__slide thumbnail "
            key={index}
            maxHeight={"150px"}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default TweenSlider;
