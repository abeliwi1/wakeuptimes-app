const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

clcBtn.addEventListener("click", handleClick);
refreshBtn.addEventListener("click", handleClick);
returnBtn.addEventListener("click", () => {
  promptSection.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  resultSection.classList.add("hidden");
});


function handleClick() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
  console.log(
    "You will fall sleep at",
    fallAsleepTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    })
  );

  const wakeUpTime = new Date(fallAsleepTime);

  const allCycles = document.getElementById("wakeup-hours-div");
  allCycles.innerHTML = "";
  
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });

    const cycleDiv = document.createElement("div");
    cycleDiv.classList.add("cycle");
    cycleDiv.id = "cycle-" + i;
    cycleDiv.textContent = wakeUpTimeString;

    allCycles.appendChild(cycleDiv);

  }

  promptSection.classList.add("hidden");
  imageContainer.classList.add("hidden");
  resultSection.classList.remove("hidden");

}
