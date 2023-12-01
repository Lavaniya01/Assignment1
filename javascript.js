const flexboxes = document.querySelectorAll('.flex');
const images = ['community.png', 'housing.jpg', 'others.png'];

for (let i = 0; i < flexboxes.length; i++) {
  flexboxes[i].style.backgroundImage = `url(${images[i]})`;
  flexboxes[i].style.backgroundSize = 'cover';
  flexboxes[i].style.backgroundPosition = 'center';
}
