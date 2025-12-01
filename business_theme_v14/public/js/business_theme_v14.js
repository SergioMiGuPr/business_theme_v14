// business_theme_v14.js

$(document).ready(function() {
    setTimeout(function() {
        const navbarLogo = document.querySelector('.app-logo');
        if (navbarLogo) {
            navbarLogo.src = '/assets/business_theme_v14/images/logo.png';
            navbarLogo.style.maxHeight = '40px';
        }
        
        const sidebarLogo = document.querySelector('.sidebar-menu .app-logo');
        if (sidebarLogo) {
            sidebarLogo.src = '/assets/business_theme_v14/images/logo.png';
        }
    }, 100);
});

$(document).on('page-change', function() {
    const navbarLogo = document.querySelector('.app-logo');
    if (navbarLogo) {
        navbarLogo.src = '/assets/business_theme_v14/images/logo.png';
    }
});