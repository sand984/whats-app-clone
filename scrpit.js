document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.querySelector('.chat-container');

    // Function to scroll to the bottom of the chat container
    const scrollToBottom = () => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    // Scroll to the bottom when the page loads
    scrollToBottom();

    // Optional: if you dynamically add new messages, call scrollToBottom() here
});