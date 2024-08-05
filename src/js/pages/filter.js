document.addEventListener("DOMContentLoaded", () => {
	const content_container = document.querySelector(".js-cards-container[data-container]");
	let currentPage;

	if (content_container != null) {
		let container = content_container.dataset.container;
		let limit = content_container.dataset.limit;
		let offset = content_container.dataset.offset;
		let filter_month_year = content_container.dataset.filter_month_year;
		let filter_sector = content_container.dataset.filter_sector;
		currentPage = content_container.dataset.current_page;
		load_page(container, limit, offset, filter_month_year, filter_sector, `/${currentPage}/${currentPage}_get_page`, `${currentPage}`);
	}

	$("#monthYearFilter .option").on("click", (item) => {
		item.target.parentElement.classList.remove("toggle");
		const parent = item.target.closest(".select").children[0];
		parent.setAttribute("data-type", item.target.getAttribute("data-type"));
		parent.innerText = item.target.innerText;

		/* GET-запрос непосредственно по клику на элементе в списке фильтрации (если нет отдельной кнопки применения фильтра) */
		let filter = [];
		if (parent != null && parent.dataset.type !== undefined && parent.dataset.type != "") {
			filter[0] = 'filter_month_year=' + parent.dataset.type;
		}
		let url_request = filter.join("&");
		location.href = (url_request ? "?" + url_request : location.href.split('?')[0]);
	});
	const firstFilter = jsMonthYearFilter('#monthYearFilter');
	firstFilter.init({url: `/${currentPage}/get_${currentPage}_filter_month_year`});
});