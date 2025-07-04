async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
  input.value = "";

  const res = await fetch("http://localhost:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
  const data = await res.json();
  chatBox.innerHTML += `<div><strong>Bot:</strong> ${data.response}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}