const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value) || "";
  } catch {
    display.value = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// 🧠 Allow keyboard input
document.addEventListener("keydown", function (e) {
  if ("0123456789+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

