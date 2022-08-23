// edit blog post button from dashboard page
function getEditBlogPost(id) {
    window.location.href = 'blogpost/' + id + '/edit';
}

// delete blog post button from dashboard page
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