document.querySelectorAll('.profiles').forEach(profile => {
    profile.addEventListener('click', function () {
        
        console.log("ckdsmclsd");
        let selectedName = this.getAttribute('data-name');
        let selectedImage = this.getAttribute('data-image');
        let selectedMessage = this.getAttribute('data-message');

        document.getElementById('chatUserName').textContent = selectedName;
        document.getElementById('chatUserImage').src = selectedImage;
        document.getElementById('chatUserMessage').textContent = selectedMessage;
        document.querySelector(".chartBody").innerHTML = "";
    });
});
document.querySelector(".charts").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        
        let inputField = event.target;
        let message = inputField.value.trim();
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let currentTime = `${hours}:${minutes}`;
        console.log(currentTime);
        if (message !== "") {
            let chatBody = document.querySelector(".chartBody");
            let messageElement = document.createElement("div");
            let time = document.createElement("H6");
            time.classList.add("timer");
            time.innerText  = currentTime;  
            messageElement.classList.add("chatMessage");
            messageElement.innerText = message;
            messageElement.appendChild(time);
            chatBody.appendChild(messageElement);
        
            chatBody.scrollTop = chatBody.scrollHeight;
            
            inputField.value = ""; 
        }
    }
});