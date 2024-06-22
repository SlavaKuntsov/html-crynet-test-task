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
