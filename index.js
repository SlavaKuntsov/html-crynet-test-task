const applicantForm = document.getElementById('contact-form')
applicantForm.addEventListener('submit', handleFormSubmit)

const formName = document.getElementById('form_name')
const formEmail = document.getElementById('form_email')
const formText = document.getElementById('form_text')

const formNameError = document.getElementById('form_name_error')
const formEmailError = document.getElementById('form_email_error')
const formTextError = document.getElementById('form_text_error')

function handleFormSubmit(event) {
	event.preventDefault()

	if (formName.value == '') {
		formNameError.style.display = 'block'
		return
	} else {
		formNameError.style.display = 'none'
	}

	if (formEmail.value == '') {
		formEmailError.style.display = 'block'
		return
	} else {
		formEmailError.style.display = 'none'
	}

	if (formText.value == '') {
		formTextError.style.display = 'block'
		return
	} else {
		formTextError.style.display = 'none'
	}

	const formData = {
		name: formName.value,
		email: formEmail.value,
		text: formText.value
	}

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	})
		.then(response => response.json())
		.then(data => {
			console.log('Успешно отправлено:', data)
			resetFormValues()
		})
		.catch(error => {
			console.error('Ошибка при отправке:', error)
		})
}

function resetFormValues() {
	formName.value = ''
	formEmail.value = ''
	formText.value = ''
}

const burgerMenu = document.getElementById('burger_menu')
const burgerMenuBackground = document.getElementById('burger_menu_background')
const burgerMenuLinks = document.getElementById('burger_menu_links')
const burgerMenuLinksClose = document.getElementById('burger_menu_links_close')

burgerMenu.addEventListener('click', burger_menu_open)
burgerMenuLinksClose.addEventListener('click', burger_menu_close)

let isOpened = false

window.onscroll = function () {}

function burger_menu_open() {
	console.log('open')


	if (!isOpened) {
		isOpened = true

		disableScroll()

		burgerMenuBackground.classList.add('burger-menu-background-open')
		burgerMenuBackground.classList.remove('burger-menu-background-close')

		burgerMenuLinks.classList.add('burger-menu-links-open')
		burgerMenuLinks.classList.remove('burger-menu-links-close')
	}
}

function burger_menu_close(){
	
	console.log('close')

	if(isOpened){
		isOpened = false

		enableScroll()

		burgerMenuBackground.classList.add('burger-menu-background-close')
		burgerMenuBackground.classList.remove('burger-menu-background-open')

		burgerMenuLinks.classList.add('burger-menu-links-close')
		burgerMenuLinks.classList.remove('burger-menu-links-open')
	}
}

function disableScroll() {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop
	var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

	// window.onscroll = function () {
	// 	window.scrollTo(scrollLeft, scrollTop)
	// }

	window.onscroll = function () {
		window.scrollTo(0, 0)
	}
}

function enableScroll() {
	window.onscroll = null
}
