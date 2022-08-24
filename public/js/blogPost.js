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
async function postComment(blogPostId) {
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
                blogPost_id: blogPostId
            })
        });

        
        if (response.ok) {
            window.location.href = '/blogpost/' + blogPostId;
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
function editComment(id) {
    const actionCommentBtn = document.getElementById('actionCommentBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const commentContent = document.getElementById('commentContent');
    const currentSection = document.getElementById('section_'+id);
    const currentComment = document.getElementById('comment_'+id);

    commentContent.value = currentComment.innerHTML.toString();
    currentSection.remove();
    actionCommentBtn.innerText = "Update Comment";
    actionCommentBtn.setAttribute('onclick', "saveEditComment('"+id+"')");
    cancelBtn.style.display = "block";
}

// save the edited comment button in viewSinglePost page
async function saveEditComment(id) {
    const commentContent = document.getElementById('commentContent');
    const content = commentContent.value;
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

function cancelEditComment() {
    window.location.reload();
}