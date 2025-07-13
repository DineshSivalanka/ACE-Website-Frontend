// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Update footer year automatically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  } 
});
