const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');

async function deleteBlogPost(id) {
    try{
        const response = await fetch('/blogpost/'+id , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            window.location.href = '/myposts';
        } else {
            alert("Not your business");
        }
        
    } catch (error) {
        alert(error);
    }
}

async function updateBlogPost(id) {
    const title = blogTitle.value;
    const content = blogContent.value;
    try{
        const response = await fetch('/blogpost/'+id , {
            method: 'PUT',
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
};