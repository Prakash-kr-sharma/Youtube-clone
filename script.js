let menuIcon = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let maincontainer = document.querySelector(".maincontainer");
let card = document.querySelectorAll(".card");


menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    maincontainer.classList.toggle("larger-maincontainer");
    card.classList.toggle("larger-card");
}

// Select the comment input and the previous comment container
let commentInput = document.querySelector(".writeCommentContainer input");
let previousCommentContainer = document.querySelector(".previousCommentContainer");

// Add an event listener for the 'Enter' key
commentInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let commentText = commentInput.value.trim();

        // Ensure the comment is not empty
        if (commentText !== "") {
            // Create a new comment div
            let newComment = document.createElement("div");
            newComment.classList.add("previousComment", "d-flex");

            // Create the HTML structure for the new comment
            newComment.innerHTML = `
                <img class="channel-logo" src="images/1688647584529.jpg" alt="">
                <div class="nameAndComment">
                    <p>@yourusername</p>
                    <p class="comment">${commentText}</p>
                </div>
            `;

            // Append the new comment to the previousCommentContainer
            previousCommentContainer.appendChild(newComment);

            // Clear the input field after adding the comment
            commentInput.value = "";
        }
    }
});
