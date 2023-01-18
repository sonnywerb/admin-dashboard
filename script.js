const likeButton = document.querySelectorAll(".like-button");
likeButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        changeLikeButton(btn);
    })
});

const bookmarkButton = document.querySelectorAll(".bookmark-button");
bookmarkButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        changeBookmarkButton(btn);
    })
});

function changeBookmarkButton(btn) {
    if (btn.classList.contains("bookmark")) {
        btn.src = "icons/bookmark.svg";
        btn.classList.remove("bookmark");
        btn.classList.add("bookmarked");
        return;
    }
    if (btn.classList.contains("bookmarked")) {
        btn.src = "icons/bookmark-outline.svg";
        btn.classList.remove("bookmarked");
        btn.classList.add("bookmark");
        return;
    }
}

function changeLikeButton(btn) {
    if(btn.classList.contains("like")) {
        btn.src = "icons/heart.svg";
        btn.classList.remove("like");
        btn.classList.add("liked");
        return;
    }
    if (btn.classList.contains("liked")) {
        btn.src = "icons/heart-outline.svg";
        btn.classList.remove("liked");
        btn.classList.add("like");
        return;
    }
}