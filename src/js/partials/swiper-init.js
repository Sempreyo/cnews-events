document.addEventListener("DOMContentLoaded", () => {
	const topEventsCarousel = document.querySelectorAll(".hero__slider");
	const articlesCarousel = document.querySelectorAll(".articles__slider");
	const galleryCarousel = document.querySelectorAll(".photos__slider");

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

	if (galleryCarousel.length > 0) {
		galleryCarousel.forEach(elem => {
			const slider = new Swiper(elem, {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 20,
				grid: {
					fill: "row",
					rows: 1
				},
				navigation: {
					nextEl: ".photos__nav .swiper-button-next",
					prevEl: ".photos__nav .swiper-button-prev"
				},
				breakpoints: {
					576: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						grid: {
							rows: 2
						}
					},
					768: {
						slidesPerView: 3,
						slidesPerGroup: 3,
						grid: {
							rows: 3
						}
					}
				}
			});
		});
	}
});
