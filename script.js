const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 发送数据到 Google Apps Script
    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        Telegram.WebApp.close(); // 关闭 Mini App
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
