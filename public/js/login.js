const usernameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const demoBtn = document.getElementById('demoBtn');

// js for when user clicks log-in button
loginBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (username ==='' || password ==='') {
            alert('Username and password cannot be empty.');
            return;
        }

        await fetch('/api/user/login', {
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

// js for when user clicks demo button
demoBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const username = "test";
        const password = "password";
        
        await fetch('/api/user/login', {
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

