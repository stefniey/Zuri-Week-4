var level = 0

// call makeChoice with the number 
function makeChoice(event) {
  event.preventDefault();
  const choice = parseInt(document.getElementById("num").value);
  const result = Math.floor(Math.random() * 10) % (2 + level) + 1
  if (choice == result) {
    alert("You got a win!! 1 point.");
    nextLevel();
  }
  else alert("incorrect"); // use dom manipulation here
}

// call when moving to next level
function nextLevel() {
  level++;
  document.getElementById("rule").innerHTML = "Guess A Number Bewteen 1 to " + (2 + level)
  document.getElementById("level").innerHTML = "Level " + (1 + level)
}

document.getElementById("submit-btn").addEventListener("click", makeChoice)