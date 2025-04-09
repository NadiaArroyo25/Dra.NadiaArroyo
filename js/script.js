// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del menú móvil
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            document.querySelector('.navbar-collapse').classList.toggle('show');
        });
    }

    // Desplazamiento suave para enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Marcar elemento de navegación activo según la página actual
    highlightCurrentPage();

    // Inicializar carrusel si existe
    const carousel = document.querySelector('#hero-carousel');
    if (carousel) {
        // Opcionalmente, puedes agregar configuraciones adicionales
    }

    // Para formularios de donación, si existen
    const donationForm = document.querySelector('form');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica de procesamiento del formulario
            alert('¡Gracias por su donación! Este es un formulario de demostración.');
        });
    }
});

// Función para resaltar el elemento de navegación actual
function highlightCurrentPage() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPage.includes(linkPath) && linkPath !== '/' && linkPath !== '#' && linkPath !== 'index.html') {
            link.classList.add('active');
        }
    });
} 