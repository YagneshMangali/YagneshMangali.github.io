document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Skill bar animation
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.width = bar.getAttribute('data-width');
            }
        });
    }, { threshold: 0.5 });
    skillBars.forEach(bar => observer.observe(bar));

    // Typing animation with center start and stop
    const typingElement = document.querySelector('.typing');
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.width = '0';
    typingElement.style.borderRight = '3px solid #00d4ff';

    let i = 0;
    const speed = 100;

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            typingElement.style.width = `${typingElement.scrollWidth}px`;
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typingElement.style.borderRight = 'none';
        }
    }

    const aboutSection = document.getElementById('about');
    const typeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && i === 0) {
                typeWriter();
            }
        });
    }, { threshold: 0.5 });
    typeObserver.observe(aboutSection);

    // Contact form
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
