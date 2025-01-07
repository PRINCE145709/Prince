// JavaScript for additional functionality if needed

// Add any dynamic behavior here
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website is fully loaded!");
    
    // Example: Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
