// Get the button element and click count element
const button = document.getElementById('clickButton');
const clickCountElement = document.getElementById('clickCount');

// Initialize the click count
let clickCount = 0;
let test = 0;
let upgrade = 50;
let addScore = 1;
// Update the click count on button click, accidental infinite Button Event Listener things.
button.addEventListener('click', function() {
  if (clickCount >= upgrade) {
    upgrade = upgrade * 5;
    addScore = addScore * 4;
    window.alert("next upgrade at " + upgrade + "\nEarning " + addScore + " per click");
  }
  clickCount = clickCount + addScore;
  clickCountElement.textContent = clickCount;
});
