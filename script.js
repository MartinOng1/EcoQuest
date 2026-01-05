const checkboxes = document.querySelectorAll(".checklist input[type='checkbox']");
const counter = document.getElementById("counter");

function updateCounter() {
  const checked = document.querySelectorAll(
    ".checklist input[type='checkbox']:checked"
  ).length;

  const total = checkboxes.length;
  counter.textContent = `${checked} / ${total} completed`;
}


checkboxes.forEach(cb => {
  cb.addEventListener("change", updateCounter);
});


updateCounter();
