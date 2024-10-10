document.getElementById("chat-toggle").addEventListener("click", function () {
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
});

document.getElementById("chat-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const chatInput = document.getElementById("chat-input").value;
    
    // User message
    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.textContent = chatInput;
    document.querySelector(".chat-content").appendChild(userMessage);

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("chat-message", "bot");
        botMessage.textContent = "AI: Thank you for your message! An agent will be with you shortly.";
        document.querySelector(".chat-content").appendChild(botMessage);
        
        // Scroll chat to bottom
        document.querySelector(".chat-content").scrollTop = document.querySelector(".chat-content").scrollHeight;
    }, 1000);

    // Clear input
    document.getElementById("chat-input").value = "";
});
