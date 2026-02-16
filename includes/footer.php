<div id="cursor" class="fixed top-0 left-0 w-6 h-6 border-2 border-accent rounded-full pointer-events-none z-50
transition-transform duration-100 ease-out opacity-0"></div>

<script>
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        // Affiche le curseur au premier mouvement
        cursor.style.opacity = "1";
        // Animation fluide
        cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
    });

    // Effet au survol des liens
    document.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('mouseenter', () => cursor.style.transform += ' scale(2)');
        link.addEventListener('mouseleave', () => cursor.style.transform = cursor.style.transform.replace(' scale(2)', ''));
    });
</script>

<script>
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Animate skill bars when visible
    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (barTop < windowHeight - 100 && bar.style.width === '') {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills();

    // Project card flip
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // CV Modal
    const downloadBtn = document.getElementById('downloadCV');
    const modal = document.getElementById('cvModal');

    downloadBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    function closeModal() {
        modal.classList.remove('active');
    }

    function downloadCV(lang) {
        const url = lang === 'fr' ? '/CV-EmmaGrave.pdf' : '/Anglais-CV-EmmaGrave.pdf';
        window.open(url, '_blank');
        closeModal();
    }

    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
</script>