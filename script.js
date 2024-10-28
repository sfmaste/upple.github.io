document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        displayMessage('Пожалуйста, заполните все поля.', 'error');
        return;
    }


    displayMessage('Вы успешно зарегистрированы!', 'success');

    setTimeout(() => {
        window.location.href = 'profile.html'; 
    }, 2000);

    document.getElementById('registrationForm').reset();
});

function displayMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;

    if (type === 'success') {
        messageElement.style.color = 'green';
    } else {
        messageElement.style.color = 'red';
    }
}
