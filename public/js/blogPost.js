const commentInput = document.getElementById('commentInput');


function getEditBlogPost(id) {
    window.location.href = '/blogpost/'+id+'/edit';
}

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

async function postComment(id) {
    const content = commentInput.value;
    if (content.trim() == "") {
        return;
    }
    try {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content,
                blogPost_id: id
            })
        });
        if (response.ok) {
            window.location.href = '/blogpost/'+id;
        } 
    } catch (error) {
        alert(error);
    }
}

async function deleteComment(id) {

    try {
        const response = await fetch('/api/comments/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            window.location.reload();
        } 
    } catch (error) {
        alert(error);
    }
}

async function editComment(id) {
    const editBtn =  document.getElementById('editBtn_'+id);
    const deleteBtn =  document.getElementById('deleteBtn_'+id);
    const saveBtn =  document.getElementById('saveEditBtn_'+id);
    const cancelBtn =  document.getElementById('cancelBtn_'+id);
    const textAreaBtn = document.getElementById('textArea_'+id)

    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
    saveBtn.style.display = "block";
    cancelBtn.style.display = "block";
    //find the right way
    textAreaBtn.attributes.disabled = false;

}

async function saveEditComment(id) {
    const content = commentInput.value;
    if (content.trim() == "") {
        return;
    }
    try {
        const response = await fetch('/api/comments/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content,
            })
        });
        if (response.ok) {
            window.location.reload();
        } 
    } catch (error) {
        alert(error);
    }
}