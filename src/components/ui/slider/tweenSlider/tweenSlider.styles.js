const sliderWrapperSx = (theme) => ({
  ".thumbnail.keen-slider__slide": {
    cursor: "pointer",
  },
  ".keen-slider__slide": {
    borderRadius: "4px",
  },
  ".thumbnail.keen-slider__slide.active": {
    border: `2px solid ${theme.palette.secondary.light} `,
  },
});

const imageCarousel = {
  sliderWrapperSx,
};

export default imageCarousel;
