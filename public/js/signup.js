// to connect front end with back end of sign up button

const usernameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const signUpBtn = document.getElementById('signUpBtn');

// to create a new account when a user clicks the signup button
signUpBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        // change user window to the /users endpoint
        window.location.href = '/';
    } catch (error) {
        alert(error);
    }
});

