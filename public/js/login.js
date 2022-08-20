const usernameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async (event) => {
    try {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        window.location.href = '/'; 
    } catch (error) {
        alert(error);
    }
});