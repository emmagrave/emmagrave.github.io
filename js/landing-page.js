// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");

    // Fonction pour vérifier si un élément est visible à l'écran
    function isVisible(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Fonction pour déclencher l'animation des barres de progression
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute("data-progress");
            // Vérifier si la barre est visible et si elle n'est pas encore animée
            if (isVisible(bar) && bar.style.width !== `${progress}%`) {
                bar.style.width = `${progress}%`;
            }
        });
    }

    // Lancer l'animation lors du défilement
    window.addEventListener("scroll", animateProgressBars);
    animateProgressBars(); // Lancer l'animation si la section est déjà visible au chargement
});

document.getElementById("download").addEventListener("click", function() {
    // Affiche le fond flouté avec animation
    const blurBackground = document.getElementById("blur-background");
    blurBackground.classList.add("active");
    document.body.classList.add("blurred");

    // Crée la fenêtre popup
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <h3>Choisissez la langue du CV</h3>
        <div class="langues">
            <button id="cv-francais">CV en Français</button>
            <button id="cv-anglais">CV en Anglais</button>
            <button id="close-popup" style="margin-top: 10px;">Fermer</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Événements pour les boutons
    document.getElementById("cv-francais").addEventListener("click", function() {
        window.open('/CV-EmmaGrave.pdf', '_blank');
    });

    document.getElementById("cv-anglais").addEventListener("click", function() {
        window.open('/Anglais-CV-EmmaGrave.pdf', '_blank');
    });

    document.getElementById("close-popup").addEventListener("click", function() {
        popup.remove();
        blurBackground.classList.remove("active");
        document.body.classList.remove("blurred");
    });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll('.article');
    const progressBars = document.querySelectorAll(".progress-bar");

    // Fonction pour vérifier si un élément est visible à l'écran
    function isVisible(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    // Fonction pour révéler les articles
    function revealArticles() {
        articles.forEach(article => {
            if (isVisible(article)) {
                article.classList.add('visible');
            }
        });
    }

    // Fonction pour animer les barres de progression
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute("data-progress");
            // Vérifier si la barre est visible et si elle n'est pas encore animée
            if (isVisible(bar) && bar.style.width !== `${progress}%`) {
                bar.style.width = `${progress}%`;
            }
        });
    }

    // Ajouter l'événement de scroll pour détecter le défilement
    window.addEventListener('scroll', function () {
        revealArticles();
        animateProgressBars();
    });

    // Vérifier immédiatement la visibilité au chargement de la page
    revealArticles();
    animateProgressBars();  // Lancer l'animation si les barres sont déjà visibles au chargement
});


function toggleFlip(element) {
    element.classList.toggle('flipped');
}

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar-fixed-top');
    const homeSection = document.querySelector('#home');
    const aboutSection = document.querySelector('#about'); // Section "about" pour gérer le défilement

    // Vérifier si les éléments existent
    if (navbar && homeSection && aboutSection) {
        window.addEventListener('scroll', () => {
            const homeRect = homeSection.getBoundingClientRect();
            const aboutRect = aboutSection.getBoundingClientRect();

            // Ajouter une petite marge avant de faire apparaître la navbar
            const threshold = 10; // Marge en pixels avant d'afficher la navbar

            // Si la section #home est complètement passée (avec un seuil)
            if (homeRect.bottom <= -threshold) {
                navbar.classList.add('visible');
                navbar.classList.remove('hidden');
            } else if (homeRect.top >= 0) {
                // Lorsque on revient vers le haut de la page (avant #home)
                navbar.classList.add('hidden');
                navbar.classList.remove('visible');
            }

            // Si on est dans la section #about, afficher la navbar même si #home est encore visible
            if (aboutRect.top <= 0 && aboutRect.bottom > 0) {
                navbar.classList.add('visible');
                navbar.classList.remove('hidden');
            }
        });
    }
});


window.addEventListener('load', () => {
    const startTime = new Date().getTime();
    const loadTime = new Date().getTime() - startTime; // Temps écoulé
    const remainingTime = 2000 - loadTime;
    // Ajouter la classe "loaded" au body pour déclencher l'animation CSS
    setTimeout(() => {
        document.body.classList.add('loaded'); // Masquer le préchargeur
        document.getElementById('content').style.display = 'block'; // Afficher le contenu principal
    }, Math.max(remainingTime, 0)); // Si la page a mis plus de 2s, aucun délai n'est ajouté
});


document.querySelector('.langSwitchLink').addEventListener('click', function(e) {
    e.preventDefault();

    const language = this.getAttribute('data-lang');

    // Fonction pour changer la langue
    function changeLanguage(language) {
        if (language === 'fr') {
            // Français
            document.getElementById('home-title').textContent = 'PORTFOLIO EMMA GRAVE';
            document.getElementById('home-subtitle').textContent = 'Développeuse Web  - Étudiante en informatique';
            document.querySelectorAll('.navbar-about')[0].textContent = 'À propos';
            document.querySelectorAll('.navbar-news')[0].textContent = 'Actualités';
            document.querySelectorAll('.navbar-skills')[0].textContent = 'Compétences';
            document.querySelectorAll('.navbar-projects')[0].textContent = 'Projets Personnels';
            document.getElementById('navbar-contact').textContent = 'Contact';

            document.getElementById('about-title').textContent = 'À PROPOS DE MOI';
            document.getElementById('about-text1').textContent = 'Salut ! Je m’appelle Emma Grave, j\'ai 19 ans, je suis actuellement en BUT informatique et je suis passionnée par :';
            document.getElementById('l1').textContent = 'Le développement web,';
            document.getElementById('l2').textContent = 'Le crochet,';
            document.getElementById('l3').textContent = 'La lecture.';
            document.getElementById('about-text2').textContent = 'Passionnée par le développement web, j\'ai acquis des compétences solides en programmation, gestion de bases de données, ainsi qu\'en outils de développement.';
            document.getElementById('about-text3').textContent = 'Je développe également des projets personnels pour mettre en pratique mes connaissances. N\'hésitez pas à explorer la section "Projets personnels" pour en savoir plus sur mon travail.';

            document.getElementById('news-title').textContent = 'ACTUALITÉS';
            document.getElementById('intro-text').innerHTML = `
                Bienvenue sur ma page dédiée à mes actualités !<br>
                Au fil des années, j'ai eu la chance de prendre part à de nombreuses activités et
                projets intéressants qui ont enrichi mon parcours scolaire et m'ont permis de
                développer mes compétences personnelles et professionnelles.<br>
                Sur cette page, vous trouverez un aperçu de ces moments marquants de
                mon parcours scolaire.
            `;
            document.getElementById('but2-title').textContent = 'Deuxième année de BUT informatique';
            document.getElementById('numeriquelles-title').textContent = 'Numériqu’elles';
            document.getElementById('numeriquelles-date').textContent = '20/12/2024';
            document.getElementById('numeriquelles-text').innerHTML = `
                Lors de ma deuxième année, j’ai participé à Numériqu’elles aux côtés des filles de BUT1
                et BUT2. Ensemble, nous avons échangé avec des collégiennes pour leur présenter
                notre parcours en informatique et discuter des opportunités dans le domaine du numérique.<br>
                Ces échanges ont permis de répondre à leurs questions, de partager nos expériences et de
                les encourager à envisager des carrières dans un domaine où les femmes sont encore
                sous-représentées.
            `;
            document.getElementById('but1-title').textContent = 'Première année de BUT informatique';
            document.getElementById('jpo-title').textContent = 'Journée Portes Ouvertes';
            document.getElementById('jpo-date').textContent = '10/02/2024';
            document.getElementById('jpo-text').innerHTML = `
                Le samedi 10 février 2024, l'IUT de Lens a ouvert ses
                portes au public pour ses journées portes ouvertes.<br>
                En tant qu'étudiante, j'ai eu l'occasion de guider les visiteurs intéressés par le BUT
                informatique à travers les locaux du département. J'ai également pu
                répondre à leurs questions concernant les cours et la vie étudiante.
            `;
            document.getElementById('numeriquelles-2-title').textContent = 'Numériqu’elles';
            document.getElementById('numeriquelles-2-date').textContent = '07/12/2023';
            document.getElementById('numeriquelles-2-text').innerHTML = `
                Numériqu’elles initie les jeunes femmes aux
                métiers du numérique avec des ateliers, témoignages et
                stages-découverte, soutenus par des entreprises et centres de
                formation locaux.<br>
                J'ai eu l'occasion de partager mon expérience,
                accompagnée de mes camarades du BUT informatique, en tant que
                filles dans ce domaine.
            `;
            document.getElementById('forum-title').textContent = 'Forum des formations';
            document.getElementById('forum-date').textContent = '23/11/2023';
            document.getElementById('forum-text').innerHTML = `
                Pour accompagner les élèves de première et de terminale
                dans la construction de leur projet de formation post-bac, le lycée André
                Malraux organise un forum des formations.<br>
                Cette année, il s'est tenu le
                23 novembre. J'ai eu la chance d'y participer toute la journée pour
                rencontrer les lycéens intéressés par le BUT informatique et partager
                avec eux mon expérience.
            `;

            document.getElementById('skills-title').textContent = 'COMPÉTENCES';
            document.getElementById('dev-web-title').textContent = 'DÉVELOPPEMENT WEB';
            document.getElementById('html-title').textContent = 'HTML';
            document.getElementById('css-title').textContent = 'CSS';
            document.getElementById('js-title').textContent = 'JAVASCRIPT';
            document.getElementById('php-title').textContent = 'PHP';
            document.getElementById('db-title').textContent = 'BASE DE DONNÉES';
            document.getElementById('postgresql-title').textContent = 'POSTGRESQL';
            document.getElementById('mysql-title').textContent = 'MYSQL';
            document.getElementById('dev-title').textContent = 'DÉVELOPPEMENT';
            document.getElementById('java-title').textContent = 'JAVA';
            document.getElementById('python-title').textContent = 'PYTHON';
            document.getElementById('tools-title').textContent = 'OUTILS';
            document.getElementById('git-title').textContent = 'GIT';
            document.getElementById('jetbrains-title').textContent = 'SUITE JETBRAINS';
            document.getElementById('eclipse-title').textContent = 'ECLIPSE';
            document.getElementById('trello-title').textContent = 'TRELLO';
            document.getElementById('download-text').textContent = 'Télécharger mon CV';

            document.getElementById('projects-title').textContent = 'PROJETS PERSONNELS';
            document.getElementById('blog-title').textContent = 'Blog en WordPress';
            document.getElementById('blog-description').innerHTML = "J'ai créé un blog en WordPress rassemblant mes passions, telles que la lecture et le crochet, et je l'ai hébergé en ligne.<br>Compétences développées :<br>";
            document.getElementById('blog-link').textContent = 'Vous pouvez le consulter ici.';
            document.getElementById('botvinted-title').textContent = 'Bot Vinted';
            document.getElementById('botvinted-status').textContent = 'En cours...';
            document.getElementById('botvinted-description').innerHTML = "Ce bot, développé en Python, m'assiste dans la gestion de mon compte Vinted (gestion des nouveaux likes, optimisation des annonces etc.).<br>Il se connecte à mon compte, enregistre mes articles dans une base de données, facilitant ainsi leur suivi.<br>Compétence développée :<br>";
            document.getElementById('botvinted-link').textContent = 'Lien vers le github.';
            document.getElementById('blog2-title').textContent = 'Blog en PHP';
            document.getElementById('blog2-status').textContent = 'En cours...';
            document.getElementById('blog2-description').innerHTML = "J'ai recréé mon blog initialement développé avec WordPress en PHP en utilisant le framework Laravel, afin d'améliorer mes compétences en développement PHP.<br>Compétences développées :<br>";
            document.getElementById('blog2-link').textContent = 'Lien vers le github.';

            document.getElementById('contact-title').textContent = 'CONTACT';
            document.getElementById('label-name').textContent = 'Nom :';
            document.getElementById('label-email').textContent = 'Email :';
            document.getElementById('label-subject').textContent = 'Sujet :';
            document.getElementById('label-message').textContent = 'Message :';
            document.getElementById('button-submit').textContent = 'Envoyer';
            document.getElementById('social-title').textContent = 'Retrouvez-moi sur les réseaux sociaux';

            document.getElementById('footer-home').textContent = 'Accueil';
            document.getElementById('footer-about').textContent = 'À propos';
            document.getElementById('footer-skills').textContent = 'Compétences';
            document.getElementById('footer-projects').textContent = 'Projets Personnels';
            document.getElementById('footer-news').textContent = 'Actualités';
            document.getElementById('footer-contact').textContent = 'Contact';
            document.getElementById('footer-copyright').textContent = '{{ site.copyright }}';
            document.getElementById('footer-rights').textContent = '© 2024 Grave Emma. Tous droits réservés.';

            langSwitchLink.textContent = "Anglais";
        } else {
            // Anglais
            document.getElementById('home-title').textContent = 'PORTFOLIO EMMA GRAVE';
            document.getElementById('home-subtitle').textContent = 'Web developer - Computer science student';
            document.querySelectorAll('.navbar-about')[0].textContent = 'About';
            document.querySelectorAll('.navbar-news')[0].textContent = 'News';
            document.querySelectorAll('.navbar-skills')[0].textContent = 'Skills';
            document.querySelectorAll('.navbar-projects')[0].textContent = 'Personal Projects';
            document.getElementById('navbar-contact').textContent = 'Contact';

            document.getElementById('about-title').textContent = 'ABOUT ME';
            document.getElementById('about-text1').textContent = 'Hi! My name is Emma Grave, I am 19 years old, currently studying IT, and I am passionate about:';
            document.getElementById('l1').textContent = 'Web development,';
            document.getElementById('l2').textContent = 'Crochet,';
            document.getElementById('l3').textContent = 'Reading.';
            document.getElementById('about-text2').textContent = 'Passionate about web development, I have acquired strong skills in programming, database management, and development tools.';
            document.getElementById('about-text3').textContent = 'I also develop personal projects to put my knowledge into practice. Feel free to explore the "Personal Projects" section to learn more about my work.';

            document.getElementById('news-title').textContent = 'NEWS';
            document.getElementById('intro-text').innerHTML = `
                Welcome to my news page!<br>
                Over the years, I have had the chance to take part in many exciting activities and
                projects that have enriched my academic journey and helped me develop my personal and professional skills.<br>
                On this page, you will find an overview of these significant moments from my academic journey.
            `;
            document.getElementById('but2-title').textContent = 'Second year of IT DUT';
            document.getElementById('numeriquelles-title').textContent = 'Numériqu’elles';
            document.getElementById('numeriquelles-date').textContent = '20/12/2024';
            document.getElementById('numeriquelles-text').innerHTML = `
                During my second year, I participated in Numériqu’elles alongside girls from BUT1
                and BUT2. Together, we exchanged with middle school girls to introduce
                them to our IT journey and discuss opportunities in the digital field.<br>
                These exchanges allowed us to answer their questions, share our experiences, and
                encourage them to consider careers in a field where women are still
                underrepresented.
            `;
            document.getElementById('but1-title').textContent = 'First year of IT DUT';
            document.getElementById('jpo-title').textContent = 'Open Day';
            document.getElementById('jpo-date').textContent = '10/02/2024';
            document.getElementById('jpo-text').innerHTML = `
                On Saturday, February 10, 2024, the IUT of Lens opened its
                doors to the public for its open days.<br>
                As a student, I had the opportunity to guide visitors interested in the IT DUT
                through the department’s premises. I was also able to answer their questions regarding the courses and student life.
            `;
            document.getElementById('numeriquelles-2-title').textContent = 'Numériqu’elles';
            document.getElementById('numeriquelles-2-date').textContent = '07/12/2023';
            document.getElementById('numeriquelles-2-text').innerHTML = `
                Numériqu’elles introduces young women to
                digital careers with workshops, testimonials, and
                discovery internships, supported by local companies and training centers.<br>
                I had the opportunity to share my experience,
                accompanied by my classmates from IT DUT, as women in this field.
            `;
            document.getElementById('forum-title').textContent = 'Training Forum';
            document.getElementById('forum-date').textContent = '23/11/2023';
            document.getElementById('forum-text').innerHTML = `
                To help high school students from first and final years
                build their post-high school education project, the André
                Malraux high school organizes a training forum.<br>
                This year, it took place on
                November 23rd. I had the chance to participate all day to
                meet high school students interested in the IT DUT and share
                my experience with them.
            `;

            document.getElementById('skills-title').textContent = 'SKILLS';
            document.getElementById('dev-web-title').textContent = 'WEB DEVELOPMENT';
            document.getElementById('html-title').textContent = 'HTML';
            document.getElementById('css-title').textContent = 'CSS';
            document.getElementById('js-title').textContent = 'JAVASCRIPT';
            document.getElementById('php-title').textContent = 'PHP';
            document.getElementById('db-title').textContent = 'DATABASE';
            document.getElementById('postgresql-title').textContent = 'POSTGRESQL';
            document.getElementById('mysql-title').textContent = 'MYSQL';
            document.getElementById('dev-title').textContent = 'DEVELOPMENT';
            document.getElementById('java-title').textContent = 'JAVA';
            document.getElementById('python-title').textContent = 'PYTHON';
            document.getElementById('tools-title').textContent = 'TOOLS';
            document.getElementById('git-title').textContent = 'GIT';
            document.getElementById('jetbrains-title').textContent = 'JETBRAINS SUITE';
            document.getElementById('eclipse-title').textContent = 'ECLIPSE';
            document.getElementById('trello-title').textContent = 'TRELLO';
            document.getElementById('download-text').textContent = 'Download my CV';

            document.getElementById('projects-title').textContent = 'PERSONAL PROJECTS';
            document.getElementById('blog-title').textContent = 'Blog in WordPress';
            document.getElementById('blog-description').innerHTML = "I created a WordPress blog that gathers my passions, such as reading and crochet, and I hosted it online.<br>Skills developed:<br>";
            document.getElementById('blog-link').textContent = 'You can check it out here.';
            document.getElementById('botvinted-title').textContent = 'Vinted Bot';
            document.getElementById('botvinted-status').textContent = 'In progress...';
            document.getElementById('botvinted-description').innerHTML = "This bot, developed in Python, helps me manage my Vinted account (handling new likes, optimizing listings, etc.).<br>It logs into my account, stores my items in a database, making it easier to track them.<br>Skills developed:<br>";
            document.getElementById('botvinted-link').textContent = 'Link to GitHub.';
            document.getElementById('blog2-title').textContent = 'Blog in PHP';
            document.getElementById('blog2-status').textContent = 'In progress...';
            document.getElementById('blog2-description').innerHTML = "I recreated my blog initially built with WordPress in PHP using the Laravel framework, in order to improve my PHP development skills.<br>Skills developed:<br>";
            document.getElementById('blog2-link').textContent = 'Link to GitHub.';

            document.getElementById('contact-title').textContent = 'CONTACT';
            document.getElementById('label-name').textContent = 'Name:';
            document.getElementById('label-email').textContent = 'Email:';
            document.getElementById('label-subject').textContent = 'Subject:';
            document.getElementById('label-message').textContent = 'Message:';
            document.getElementById('button-submit').textContent = 'Send';
            document.getElementById('social-title').textContent = 'Find me on social media';

            document.getElementById('footer-home').textContent = 'Home';
            document.getElementById('footer-about').textContent = 'About';
            document.getElementById('footer-skills').textContent = 'Skills';
            document.getElementById('footer-projects').textContent = 'Personal Projects';
            document.getElementById('footer-news').textContent = 'News';
            document.getElementById('footer-contact').textContent = 'Contact';
            document.getElementById('footer-copyright').textContent = '{{ site.copyright }}';
            document.getElementById('footer-rights').textContent = '© 2024 Grave Emma. All rights reserved.';

            langSwitchLink.textContent = "Français";
        }

        // Sauvegarde la langue dans le stockage local
        localStorage.setItem('language', language);
    }

    // Vérifier la langue enregistrée dans le localStorage, si elle existe
    const savedLanguage = localStorage.getItem('language') || 'fr';  // Langue par défaut : 'fr'
    changeLanguage(savedLanguage);

    // Mettre à jour l'attribut "data-lang" de l'élément pour la langue suivante
    if (savedLanguage === 'fr') {
        this.setAttribute('data-lang', 'en');
    } else {
        this.setAttribute('data-lang', 'fr');
    }
});

// Initialisation avec la langue sauvegardée
const savedLanguage = localStorage.getItem('language') || 'fr';  // Langue par défaut : 'fr'
const langSwitchLink = document.querySelector('.langSwitchLink');
if (savedLanguage === 'fr') {
    langSwitchLink.textContent = "Anglais";
} else {
    langSwitchLink.textContent = "Français";
}