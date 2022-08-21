const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
const createPostBtn = document.getElementById('createPostBtn');

createPostBtn.addEventListener('click', async (event) => {
    const title = blogTitle.value;
    const content = blogContent.value;
    try{
        const response = await fetch('/blogpost/' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        window.location.href = '/myposts';
    } catch (error) {
        alert(error);
    }
});
