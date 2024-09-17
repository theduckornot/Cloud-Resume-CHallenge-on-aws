// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade In and Slide In on Scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('active');
        }
    });
});

// Show/Hide Back to Top Button on Scroll
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Hide Loading Spinner Once Page is Loaded
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'none';
});


const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://4mldezvfmqaqgkoihsdecnvag40duwfv.lambda-url.eu-north-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}
updateCounter();