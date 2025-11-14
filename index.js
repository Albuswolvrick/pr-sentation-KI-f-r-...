//console.log('Happy developing ✨')
/**
 * Funktion zum Wechseln zwischen verschiedenen Sektionen
 * @param {string} sectionId - Die ID der anzuzeigenden Sektion
 */
function showSection(sectionId) {
    // Alle Sektionen ausblenden
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Alle Navigation-Buttons deaktivieren
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Gewünschte Sektion anzeigen
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Entsprechenden Button aktivieren
    const clickedButton = event.target;
    if (clickedButton && clickedButton.classList.contains('nav-btn')) {
        clickedButton.classList.add('active');
    }

    // Zum Anfang der Seite scrollen für bessere UX
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optional: Tastatur-Navigation (Pfeiltasten)
document.addEventListener('keydown', function(e) {
    const sections = ['Einleitung', 'grundlagen', 'chancen-risiken', 'coding', 'aardvark', 'Fazit'];
    const activeSection = document.querySelector('.section.active');
    const currentIndex = sections.indexOf(activeSection.id);

    // Pfeil nach rechts - nächste Sektion
    if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
        showSection(sections[currentIndex + 1]);
        document.querySelectorAll('.nav-btn')[currentIndex + 1].classList.add('active');
    }

    // Pfeil nach links - vorherige Sektion
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        showSection(sections[currentIndex - 1]);
        document.querySelectorAll('.nav-btn')[currentIndex - 1].classList.add('active');
    }
});

// Beim Laden der Seite die erste Sektion anzeigen
document.addEventListener('DOMContentLoaded', function() {
    showSection('grundlagen');
});