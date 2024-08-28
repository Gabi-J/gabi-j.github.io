/* Hamburger menu */

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/* arrow */

window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.arrow');
    const aboutSection = document.querySelector('#about');
    const footerSection = document.querySelector('footer');
    
    const aboutRect = aboutSection.getBoundingClientRect();
    const footerRect = footerSection.getBoundingClientRect();

    // Zobrazit šipku, když je sekce #about zobrazená a zůstat až do konce stránky
    if (aboutRect.bottom <= window.innerHeight && footerRect.top > window.innerHeight) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.message');
    const aboutSection = document.querySelector('#about');
    const footerSection = document.querySelector('footer');
    
    const aboutRect = aboutSection.getBoundingClientRect();
    const footerRect = footerSection.getBoundingClientRect();

    // Zobrazit šipku, když je sekce #about zobrazená a zůstat až do konce stránky
    if (aboutRect.bottom <= window.innerHeight && footerRect.top > window.innerHeight) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
});

/* menu */

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 1) { 
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

/* Popups */

// Funkce pro otevření popupu
function openPopup(id) {
    document.getElementById(id).style.display = 'block';
    document.body.classList.add('no-scroll'); // Přidání třídy no-scroll
}

// Funkce pro zavření popupu
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    document.body.classList.remove('no-scroll'); // Odstranění třídy no-scroll
}

// Funkce pro otevření popupu s výsledkem (obrázek nebo PDF)
function openResultPopup(fileSrc) {
    const resultPopup = document.getElementById('popup-result');
    const resultContent = document.getElementById('result-content');
    
    if (fileSrc.endsWith('.pdf')) {
        resultContent.innerHTML = `<embed src="${fileSrc}" type="application/pdf"/>`;
    } else {
        resultContent.innerHTML = `<img src="${fileSrc}" alt="Project result" class="result-img">`;
    }

    resultPopup.style.display = 'block';
    document.body.classList.add('no-scroll'); // Přidání třídy no-scroll
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