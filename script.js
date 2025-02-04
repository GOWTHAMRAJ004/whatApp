document.querySelectorAll('.profiles').forEach(profile => {
    profile.addEventListener('click', function () {
        
        console.log("ckdsmclsd");
        let selectedName = this.getAttribute('data-name');
        let selectedImage = this.getAttribute('data-image');
        let selectedMessage = this.getAttribute('data-message');

        document.getElementById('chat-user-name').textContent = selectedName;
        document.getElementById('chat-user-image').src = selectedImage;
        document.getElementById('chat-user-message').textContent = selectedMessage;
    });
});
document.querySelector(".charts").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        
        let inputField = event.target;
        let message = inputField.value.trim();
        
        if (message !== "") {
            let chatBody = document.querySelector(".chartBody");
            let messageElement = document.createElement("div");
            
            messageElement.classList.add("chatMessage");
            messageElement.innerText = message;

            chatBody.appendChild(messageElement);
            chatBody.scrollTop = chatBody.scrollHeight;
            
            inputField.value = ""; 
        }
    }
});