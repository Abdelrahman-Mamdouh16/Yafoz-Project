const navLink = document.querySelectorAll('.nav-link');
const windowLocation = window.location.hash;

navLink.forEach(navLinks => {
    navLinks.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinks.classList.add('active');
    })

})
