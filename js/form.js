const form = document.querySelector('form')
const email = document.querySelector('#email')
const emailError = document.querySelector('.form-error')

form.addEventListener('submit', (e) => { 
    e.preventDefault()
    let name = form.name.value
    let email = form.email.value
    let message = form.message.value
    if (email !== email.toLowerCase()) {
        emailError.innerHTML = `<p class="error">Email should be written in lowercase letters: ${email}</p>`
        console.log('error submission')
    }

    
})


