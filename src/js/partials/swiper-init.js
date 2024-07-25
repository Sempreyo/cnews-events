document.addEventListener("DOMContentLoaded", () => {
	const topEventsCarousel = document.querySelectorAll(".hero__slider");
	const articlesCarousel = document.querySelectorAll(".articles__slider");

	if (topEventsCarousel.length > 0) {
		topEventsCarousel.forEach(elem => {
			const slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				pagination: {
					el: ".hero__pagination",
					clickable: true
				}
			});
		});
	}

	if (articlesCarousel.length > 0) {
		articlesCarousel.forEach(elem => {
			const slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 20,
				pagination: {
					el: ".articles__pagination",
					clickable: true,
				},
				breakpoints: {
					768: {
						slidesPerView: 2
					},
					992: {
					  	slidesPerView: 3
					}
				  }
			});
		});
	}
});
