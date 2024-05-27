document.addEventListener("DOMContentLoaded", () => {
	const topEventsCarousel = document.querySelectorAll(".hero__slider");

	if (topEventsCarousel.length > 0) {
		topEventsCarousel.forEach(elem => {
			const slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				pagination: {
					el: ".hero__pagination",
					clickable: true,
				}
			});
		});
	}
});
