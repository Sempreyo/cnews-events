document.addEventListener("DOMContentLoaded", () => {
	const anchors = document.querySelectorAll('.anchor');

	if (anchors && anchors.length > 0) {
		anchors.forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
	}

	function validateForm(form) {
		if (form !== undefined && form != null) {
			let validation = form.checkValidity();
			form.classList.add('was-validated');
			return validation;
		}
		return false;
	}

	const showMoreNewsBtn = document.querySelector(".news-btn-container .btn");
	if (showMoreNewsBtn) {
		showMoreNewsBtn.addEventListener("click", () => {
			let hiddenElements = document.querySelectorAll(".news-item.d-none");
			let successList = Array.prototype.slice.call(hiddenElements).slice(0, 2);
			successList.forEach((item, index) => {
				item.className = "news-item";
			});
			if (hiddenElements.length === successList.length) {
				showMoreNewsBtn.className = "d-none";
			}
		});
	}

	// smooth scroll links
	$(".js-anchor-link").click(function (e) {
		e.preventDefault();
		var href = $(this).attr("href");
		var absolutePath = href.split("#")[0];
		var targetId = href.split("#")[1];
		var currentPage = window.location.pathname;
		if (absolutePath === "") {
			var target = $("#" + targetId);
			if (target.length) {
				var scrollTo = target.offset().top - 20;
				$("html, body").animate({scrollTop: scrollTo + "px"}, 800);
			}
		} else if (absolutePath === currentPage) {
			var target = $("#" + targetId);
			if (target.length) {
				var scrollTo = target.offset().top - 20;
				$("html, body").animate({scrollTop: scrollTo + "px"}, 800);
			}
		} else {
			window.location.href = absolutePath + "#" + targetId;
		}
	});

	// fix - fixed navbar
	if ($(window).width() >= 992) {
		var elementPosition = $(".article-nav").offset();
		if (elementPosition !== undefined) {
			$(window).scroll(function () {
				if ($(window).scrollTop() > elementPosition.top) {
					$(".article-nav").addClass("fixed");
				} else {
					$(".article-nav").removeClass("fixed");
				}
			});
		}
	}

	// company tooltip
	$('[data-hint]').hover(function () {
		if ($(this).data('hint').length > 2) {
			var positionTop = $(this).offset().top + $(this).height() / 2 - $(window).scrollTop() - 20;
			var positionLeft = $(this).offset().left - $(window).scrollLeft() + 15 + $(this).outerWidth();
			var sideLeft = "";
			if (positionLeft > ($(window).width() / 2) + 300) {
				positionLeft = $(this).offset().left - $(window).scrollLeft() - 590;
				sideLeft = " hint-left"
			}
			$('body').append('<div class="tooltip' + sideLeft + '">' + $(this).data('hint') + '</div>');
			$('body .tooltip').css({'top': positionTop - ($('body .tooltip').height() / 2), 'left': positionLeft});
		}
	}, function () {
		$('body > .tooltip').remove();
	});
});
