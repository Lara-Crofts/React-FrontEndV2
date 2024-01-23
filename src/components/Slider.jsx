// Slider.jsx
import React, { useEffect, useState, useRef } from 'react';

const Slider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollLeft = useRef(0);

  useEffect(() => {
    const initSlider = () => {
      const imageList = document.querySelector(".slider-wrapper .image-list");
      const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
      const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
      const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");

      maxScrollLeft.current = imageList.scrollWidth - imageList.clientWidth;

      // Handle scrollbar thumb drag
      const handleThumbDrag = (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft.current;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      };

      scrollbarThumb.addEventListener("mousedown", handleThumbDrag);

      // slide images according to the slide button clicks
      slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });

      // show or hide slide buttons based on scroll position
      const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft.current ? "none" : "flex";
      };

      // update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft.current) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      };

      // call these two functions when image list scrolls
      const handleScroll = () => {
        setScrollPosition(imageList.scrollLeft);
        updateScrollThumbPosition();
        handleSlideButtons();
      };

      imageList.addEventListener("scroll", handleScroll);

      // initial setup
      updateScrollThumbPosition();
      handleSlideButtons();
    };

    // call initSlider on component mount
    initSlider();

    //event listeners for window resize and load
    window.addEventListener("resize", initSlider);
    window.addEventListener("load", initSlider);

    // cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", initSlider);
      window.removeEventListener("load", initSlider);
    };
  }, []); // empty dependency array to ensure the effect runs once on mount

  return (
    <>
      <div className="container">
        <div className="slider-wrapper">
          <button
            id="prev-slide"
            className="slide-button material-symbols-rounded"
            style={{ display: scrollPosition <= 0 ? "none" : "flex" }}
          >
            &lt;
          </button>
          {children}
          <button
            id="next-slide"
            className="slide-button material-symbols-rounded"
            style={{ display: scrollPosition >= maxScrollLeft.current ? "none" : "flex" }}
          >
            &gt;
          </button>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb" style={{ left: (scrollPosition / maxScrollLeft.current) * 100 + '%' }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
