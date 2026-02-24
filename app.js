const quotesObj = {
  quotes: [
    " “The best way to get started is to quit talking and begin doing.”",
    "“Success is not in what you have, but who you are.”",
    "“Dream big and dare to fail.”",
    "“Do something today that your future self will thank you for.”",
    "“Push yourself, because no one else is going to do it for you.”",
  ]
};

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesObj.quotes.length);
  return quotesObj.quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = getRandomQuote();
});
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("mySelect");
  const button = document.getElementById("myButton");

  select.addEventListener("change", function() {
    button.disabled = this.value === "";
  });
});
const button = document.getElementById("myButton");
const statusContainer = document.getElementById("statusContainer");
const loadingSpinner = document.getElementById("loadingSpinner");
const spinnerContainer = document.getElementById("spinnerContainer");

const messages = [
  "Dialing the procrastination hotline… standby.",
  "Consulting my inner wisdom (still buffering)…",
  "Task approved by the Office of Laziness 😴",
  "Done! The universe giggled in approval."
];

function typeMessage(message, callback) {
  const textDiv = document.createElement("div");
  textDiv.classList.add("status-text");
  statusContainer.appendChild(textDiv);

  let i = 0;
  let interval = setInterval(() => {
    textDiv.textContent += message[i];
    i++;
    if (i === message.length) {
      clearInterval(interval);
      setTimeout(() => {
        textDiv.remove(); // Remove the current message after it's done
        callback(); // Call callback to load next message
      }, 1000); // Wait for 1 second before removing the message
    }
  }, 100); // Speed of typing (in ms)
}

function showMessages() {
  let i = 0;

  function showNextMessage() {
    if (i < messages.length) {
      typeMessage(messages[i], () => {
        setTimeout(() => {
          i++;
          showNextMessage(); // Show the next message
        }, 1000); // Delay before showing next message
      });
    } else {
      loadingSpinner.style.display = "none"; 
      setTimeout(() => {
  window.location.href = "./index2.html"; // Redirect to your desired site
}, 1000); // 10 seconds (10000ms)// Hide the spinner once all messages are shown
    }
  }

  showNextMessage(); // Start showing messages
}

button.addEventListener("click", () => {
  // Show the spinner after the button is clicked
  spinnerContainer.style.display = "block"; 
  statusContainer.innerHTML = ""; // Clear previous content
  showMessages(); // Start the message display process
  setTimeout()
});