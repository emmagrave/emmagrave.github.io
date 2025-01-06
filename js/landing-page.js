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
