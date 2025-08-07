function updateClock() {
  fetch("/api/time")
    .then((response) => response.json())
    .then((data) => {
      const cronTimeElement = document.getElementById("cronTime");
      cronTimeElement.textContent = data.cronString;
      cronTimeElement.classList.add("updating");
      setTimeout(() => cronTimeElement.classList.remove("updating"), 500);

      document.getElementById("minute").textContent = data.minute;
      document.getElementById("hour").textContent = data.hour;
      document.getElementById("dayOfMonth").textContent = data.dayOfMonth;
      document.getElementById("month").textContent = data.month;
      document.getElementById("dayOfWeek").textContent = data.dayOfWeek;

      document.getElementById(
        "readableTime"
      ).textContent = `${data.readable.hour}:${data.readable.minute} (${data.readable.dayOfWeek})`;
    })
    .catch((error) => {
      console.error("Error updating clock:", error);
    });
}

updateClock();

setInterval(updateClock, 1000);

document.querySelectorAll(".field").forEach((field) => {
  field.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.2s ease";
  });

  field.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

document.getElementById("cronTime").addEventListener("click", function () {
  navigator.clipboard
    .writeText(this.textContent)
    .then(() => {
      const originalText = this.textContent;
      this.textContent = "Copied!";
      setTimeout(() => {
        this.textContent = originalText;
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "r") {
    updateClock();
  }

  if (event.key.toLowerCase() === "c") {
    const cronString = document.getElementById("cronTime").textContent;
    navigator.clipboard.writeText(cronString);
  }
});
