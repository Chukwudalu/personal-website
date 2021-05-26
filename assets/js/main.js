// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu("nav-toggle", "nav-menu");

// Active and Remove Menu
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu 
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// Scroll Home
sr.reveal('.home_title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home_img', { delay: 400 })

// Scroll Skill
sr.reveal('.skill_title', {})
sr.reveal('.skills_subtitle', {delay: 200})
sr.reveal('.skills_con', {delay: 400})