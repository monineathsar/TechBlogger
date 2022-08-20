// to connect front end with back end of log out button
const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', async (event) => {
    try{
        const response = await fetch('/api/user/logout' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = '/login'
    } catch (error) {
        alert(error);
    }
});