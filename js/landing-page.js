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

//TELECHARGEMENT DU CV :
document.getElementById('download').addEventListener('click', function() { //quand on clique sur le bouton d'id 'download' :
    // L'URL du PDF que vous souhaitez télécharger
    const pdfUrl = 'CV-EmmaGrave.pdf';
    // Créer un élément <a> invisible
    const a = document.createElement('a');
    a.href = pdfUrl; //le lien prend le nom du pdf
    a.download = 'CV-GraveEmma.pdf'; // Nom du fichier lors du téléchargement
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

function toggleFlip(element) {
    element.classList.toggle('flipped');
}

