function togglePost(button) {

    const post = button.parentElement;
    const content = post.querySelector(".content");

    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Leer menos";
    } else {
        content.style.display = "none";
        button.textContent = "Leer más";
    }

}