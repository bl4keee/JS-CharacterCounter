var input = document.querySelector("#customInput");
var charCount = document.querySelector("#charCount");
var onKeyDown = function() {
  charCount.textContent = input.value.length;  
};
input.addEventListener("keyup", onKeyDown);