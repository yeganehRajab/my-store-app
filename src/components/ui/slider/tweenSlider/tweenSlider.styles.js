const sliderWrapperSx = (theme) => ({
  ".thumbnail.keen-slider__slide": {
    cursor: "pointer",
  },
  ".thumbnail.keen-slider__slide.active": {
    border: `2px solid ${theme.palette.secondary.light} `,
  },
});

const imageCarousel = {
  sliderWrapperSx,
};

export default imageCarousel;
