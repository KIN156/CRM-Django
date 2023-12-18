
// Message/Notification timer
document.addEventListener("DOMContentLoaded", function() {
    var message_timeout = document.getElementById("message-timer");

    setTimeout(function() {
        if (message_timeout) {
            message_timeout.style.display = "none";
        }
    }, 5000);
});




