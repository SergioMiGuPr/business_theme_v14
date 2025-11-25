// business_theme_v14.js

frappe.ready(function() {
    setTimeout(function() {
        const navbarLogo = document.querySelector('.navbar-brand img');
        if (navbarLogo) {
            navbarLogo.src = '/assets/business_theme_v14/images/logo.png';
            navbarLogo.style.maxHeight = '40px';
        }
        
        const sidebarLogo = document.querySelector('.app-logo img');
        if (sidebarLogo) {
            sidebarLogo.src = '/assets/business_theme_v14/images/logo.png';
        }
    }, 100);
});

$(document).on('page-change', function() {
    const navbarLogo = document.querySelector('.navbar-brand img');
    if (navbarLogo) {
        navbarLogo.src = '/assets/business_theme_v14/images/logo.png';
    }
});