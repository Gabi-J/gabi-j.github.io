/* Hamburger menu */

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/* Arrow */

window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.arrow');
    const aboutSection = document.querySelector('#about');
    const footerSection = document.querySelector('footer');
    
    const aboutRect = aboutSection.getBoundingClientRect();
    const footerRect = footerSection.getBoundingClientRect();

    // Zobrazit šipku, když je sekce #about zobrazená nebo pokud je zobrazen footer
    if (aboutRect.bottom <= window.innerHeight || footerRect.top <= window.innerHeight) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
});

/* Popups */

// Funkce pro otevření popupu
function openPopup(id) {
    document.getElementById(id).style.display = 'block';
}

// Funkce pro zavření popupu
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Funkce pro otevření popupu s výsledkem (obrázek nebo PDF)
function openResultPopup(fileSrc) {
    const resultPopup = document.getElementById('popup-result');
    const resultContent = document.getElementById('result-content');
    
    // Kontrola, zda je soubor obrázek nebo PDF
    if (fileSrc.endsWith('.pdf')) {
        resultContent.innerHTML = `<embed src="${fileSrc}" type="application/pdf"/>`;
    } else {
        resultContent.innerHTML = `<img src="${fileSrc}" alt="Project result" class="result-img">`;
    }

    resultPopup.style.display = 'block';
}

// Funkce pro zavření popupu při kliknutí mimo jeho obsah
function closePopupOutside(event, id) {
    if (event.target.id === id) {
        closePopup(id);
    }
}

/* tlačítka "Více info" */

// Funkce pro zobrazení/skrytí informací
function toggleMoreInfo(button) {
    const projectContainer = button.closest('.project-container');
    const projectMore = projectContainer.querySelector('.project-more');
    projectMore.classList.toggle('trans');
}