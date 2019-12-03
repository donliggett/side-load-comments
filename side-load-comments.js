const commentsSection = document.getElementById('comments-slider-container');
const commentsToggle = document.getElementById('comments-toggle');
const commentsClose = document.getElementById('comments-close');

commentsToggle.onclick = () => {
  commentsSection.classList.toggle('active');
}
commentsClose.onclick = () => {
  commentsSection.classList.remove('active');
}