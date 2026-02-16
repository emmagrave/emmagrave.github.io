function closeModal() {
    const modal = document.getElementById('cvModal');
    modal.classList.remove('active');
}

function downloadCV(lang) {
    const url = lang === 'fr' ? '/CV-EmmaGrave.pdf' : '/Anglais-CV-EmmaGrave.pdf';
    window.open(url, '_blank');
    closeModal();
}

document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('header');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

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

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    const downloadBtn = document.getElementById('downloadCV');
    const modal = document.getElementById('cvModal');

    if (downloadBtn && modal) {
        downloadBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    const btnFr = document.getElementById('cv-francais');
    const btnEn = document.getElementById('cv-anglais');
    const btnClose = document.getElementById('close-popup');

    if (btnFr) {
        btnFr.addEventListener('click', () => downloadCV('fr'));
    }

    if (btnEn) {
        btnEn.addEventListener('click', () => downloadCV('en'));
    }

    if (btnClose) {
        btnClose.addEventListener('click', closeModal);
    }
});