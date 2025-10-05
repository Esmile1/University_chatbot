function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();
  if (userMessage === "") return;

  displayMessage(userMessage, "user-message");
  inputField.value = "";

  const botResponse = getBotResponse(userMessage);
  setTimeout(() => displayMessage(botResponse, "bot-message"), 500);
}

function displayMessage(message, className) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.className = className;
  messageElement.innerHTML = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  // Greetings
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello 👋! How can I assist you today?";
  }

  // Department
  if (input.includes("department") || input.includes("faculties")) {
    return "Our university has departments like Computer Science, Engineering, Business,economics,and Education.";
  }

  // Admission
  if (input.includes("admission")) {
    return "Admissions open every September. Visit the registrar office or our website for details.";
  }

  // Registration
  if (input.includes("register") || input.includes("enroll")) {
    return "You can register by visiting the Registrar Office or using the online student portal.";
  }

  // Library
  if (input.includes("library")) {
    return "The library is open from 8:00 AM to 8:00 PM, Monday to Friday.";
  }

  // Contact
  if (input.includes("contact") || input.includes("email")) {
    return "You can contact us via info@university.edu or call +251-900-123-456.";
  }

  // Location
  if (input.includes("location") || input.includes("where")) {
    return "We are located at Ambo University, Woliso Campus, Main Gate.";
  }

  // Fees
  if (input.includes("fee") || input.includes("tuition")) {
    return "Tuition fees vary by program. Visit the finance office for exact details.";
  }

  // Default
  return "I'm not sure about that 🤔. Please check the university website or contact the registrar office for more information.";
}
