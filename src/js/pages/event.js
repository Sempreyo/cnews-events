document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll("a[data-toggle]").forEach(e => {
		e.addEventListener("click", e => {
			e.preventDefault();
			const switchBtn = e.target.getAttribute("href");
			e.target.closest(".form-registration").setAttribute("hidden", "true");
			document.querySelector(`.form-registration[data-switch="${e.target.dataset.toggle}"]`).removeAttribute("hidden");
			document.querySelector(switchBtn).scrollIntoView({
				behavior: "smooth"
			});
		})
	});

	const regFormSendButton = document.getElementById('regFormSendButton');
	if (regFormSendButton != null) {
		regFormSendButton.addEventListener('click', event => {
			event.preventDefault();
			event.stopImmediatePropagation();
			const form = event.target.closest('form');
			let checkStatus = true;
			if (!validateForm(form)) {
				checkStatus = false;
			}
			form.classList.add('was-validated');
			if (!checkStatus) {
				alert('Ошибка\nНе заполнены все обязательные поля формы');
			} else {
				const formForSend = document.createElement('form');
				if (formForSend) {
					formForSend.style.display = 'none';
					formForSend.method = "POST";
					formForSend.action = form.action;
					Array.from(form).forEach(field => {
						if (field.type != 'submit') {
							formForSend.appendChild(field.cloneNode(true));
						}
					});
					const industries = form.querySelector('[data-name="industries"] .selectBtn');
					if (industries != null && industries.dataset.value !== undefined && industries.dataset.value != "") {
						const industries_field = document.createElement('input');
						industries_field.type = "text";
						industries_field.name = "industries";
						industries_field.value = industries.dataset.value;
						formForSend.appendChild(industries_field);
					}
					const company_employees_count = form.querySelector('[data-name="company_employees_count"] .selectBtn');
					if (company_employees_count != null && company_employees_count.dataset.value !== undefined && company_employees_count.dataset.value != "") {
						const company_employees_count_field = document.createElement('input');
						company_employees_count_field.type = "text";
						company_employees_count_field.name = "company_employees_count";
						company_employees_count_field.value = company_employees_count.dataset.value;
						formForSend.appendChild(company_employees_count_field);
					}
					document.body.appendChild(formForSend);
					formForSend.submit();
				}
			}
		});
	}

	const mettingFormSendButton = document.getElementById('mettingFormSendButton');
	if (mettingFormSendButton != null) {
		mettingFormSendButton.addEventListener('click', event => {
			event.preventDefault();
			event.stopImmediatePropagation();
			const form = event.target.closest('form');
			let checkStatus = true;
			if (!validateForm(form)) {
				checkStatus = false;
			}
			form.classList.add('was-validated');
			if (!checkStatus) {
				alert('Ошибка\nНе заполнены все обязательные поля формы');
			} else {
				const formForSend = document.createElement('form');
				if (formForSend) {
					formForSend.style.display = 'none';
					formForSend.method = "POST";
					formForSend.action = form.action;
					Array.from(form).forEach(field => {
						if (field.type != 'submit') {
							formForSend.appendChild(field.cloneNode(true));
						}
					});
					const industries = form.querySelector('[data-name="industries"] .selectBtn');
					if (industries != null && industries.dataset.value !== undefined && industries.dataset.value != "") {
						const industries_field = document.createElement('input');
						industries_field.type = "text";
						industries_field.name = "industries";
						industries_field.value = industries.dataset.value;
						formForSend.appendChild(industries_field);
					}
					const company_employees_count = form.querySelector('[data-name="company_employees_count"] .selectBtn');
					if (company_employees_count != null && company_employees_count.dataset.value !== undefined && company_employees_count.dataset.value != "") {
						const company_employees_count_field = document.createElement('input');
						company_employees_count_field.type = "text";
						company_employees_count_field.name = "company_employees_count";
						company_employees_count_field.value = company_employees_count.dataset.value;
						formForSend.appendChild(company_employees_count_field);
					}
					const post = form.querySelector('[data-name="post"] .selectBtn');
					if (post != null && post.dataset.value !== undefined && post.dataset.value != "") {
						const post_field = document.createElement('input');
						post_field.type = "text";
						post_field.name = "post";
						post_field.value = post.dataset.value;
						formForSend.appendChild(post_field);
					}
					document.body.appendChild(formForSend);
					formForSend.submit();
				}
			}
		});
	}
});