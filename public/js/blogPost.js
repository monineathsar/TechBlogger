const commentInput = document.getElementById('commentContent');

// edit blog post button in viewSinglePost page
function getEditBlogPost(id) {
    window.location.href = '/blogpost/' + id + '/edit';
}

// delete blog post button in viewSinglePost page
async function deleteBlogPost(id) {
    try {
        const response = await fetch('/blogpost/' + id, {
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

// to post a comment button in viewSinglePost Page
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
            window.location.href = '/blogpost/' + id;
        }
    } catch (error) {
        alert(error);
    }
}

// delete comment button in viewSinglePost page
async function deleteComment(id) {

    try {
        const response = await fetch('/api/comments/' + id, {
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

// edit comment button in viewSinglePost page
async function editComment(id) {
    const editCommentBtn = document.getElementById('editBtn_' + id);
    const deleteCommentBtn = document.getElementById('deleteBtn_' + id);
    const saveCommentBtn = document.getElementById('saveEditBtn_' + id);
    const cancelEditBtn = document.getElementById('cancelBtn_' + id);
    const textAreaBtn = document.getElementById('textArea_' + id)

    editCommentBtn.style.display = "none";
    deleteCommentBtn.style.display = "none";
    saveCommentBtn.style.display = "block";
    cancelEditBtn.style.display = "block";

    textAreaBtn.attributes.disabled = false;
}

// save the edited comment button in viewSinglePost page
async function saveEditComment(id) {
    const content = commentInput.value;
    if (content.trim() == "") {
        return;
    }
    try {
        const response = await fetch('/api/comments/' + id, {
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