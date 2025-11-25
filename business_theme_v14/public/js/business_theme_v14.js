// business_theme_v14.js

frappe.ready(function() {
    // Remplacer le logo de la navbar (en haut à gauche)
    setTimeout(function() {
        const navbarLogo = document.querySelector('.navbar-brand img');
        if (navbarLogo) {
            navbarLogo.src = '/assets/business_theme_v14/images/logo.png';
            navbarLogo.style.maxHeight = '40px'; // Ajustez la taille si nécessaire
        }
        
        // Remplacer aussi le logo dans la sidebar si présent
        const sidebarLogo = document.querySelector('.app-logo img');
        if (sidebarLogo) {
            sidebarLogo.src = '/assets/business_theme_v14/images/logo.png';
        }
    }, 100);
});

// Alternative : écouter les changements de page
$(document).on('page-change', function() {
    const navbarLogo = document.querySelector('.navbar-brand img');
    if (navbarLogo) {
        navbarLogo.src = '/assets/business_theme_v14/images/logo.png';
    }
});