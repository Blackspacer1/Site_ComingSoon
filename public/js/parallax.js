
window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;

    // Move sun down
    const sun = document.getElementById('sun');
    sun.style.top = `${scrollPosition * 0.4}px`; // Adjust the factor to control speed of movement

    const birds = document.getElementById('birds');
    birds.style.left = `${50 - (scrollPosition * 0.1)}%`; // Move birds from right to left            
    birds.style.top = `${scrollPosition * 1}px`;

    const ground = document.getElementById('ground');
    ground.style.bottom = `${scrollPosition * -0.1}px`;

    const ground_ = document.getElementById('ground_');
    ground_.style.bottom = `${scrollPosition * -0.1}px`;

    const mountains = document.getElementById('mountains');
    mountains.style.bottom = `calc(-30% + ${scrollPosition * -0.02}%)`;

    const mountains_ = document.getElementById('mountains_');
    mountains_.style.bottom = `calc(-30% + ${scrollPosition * -0.02}%)`;

    // Get the total scrollable height
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the opacity based on scroll position
    const opacity = 1 - (scrollPosition / scrollableHeight);
    sun.style.opacity = opacity;
    ground_.style.opacity = opacity;
    mountains_.style.opacity = opacity;
});
