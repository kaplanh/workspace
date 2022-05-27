const hamburger = document.querySelector('.hamburger');
const menuIsActive = () => {
    hamburger.classList.toggle('active');
};
hamburger.addEventListener('click', menuIsActive)