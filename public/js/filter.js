document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".js-cards-container[data-container]");let e;if(null!=t){let a=t.dataset.container,r=t.dataset.limit,n=t.dataset.offset,o=t.dataset.filter_month_year,i=t.dataset.filter_sector;e=t.dataset.current_page,load_page(a,r,n,o,i,`/${e}/${e}_get_page`,""+e)}$("#monthYearFilter .option").on("click",t=>{t.target.parentElement.classList.remove("toggle");const e=t.target.closest(".select").children[0];e.setAttribute("data-type",t.target.getAttribute("data-type")),e.innerText=t.target.innerText;let a=[];null!=e&&void 0!==e.dataset.type&&""!=e.dataset.type&&(a[0]="filter_month_year="+e.dataset.type);let r=a.join("&");location.href=r?"?"+r:location.href.split("?")[0]});jsMonthYearFilter("#monthYearFilter").init({url:`/${e}/get_${e}_filter_month_year`})});