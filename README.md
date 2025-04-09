# Dra. Nadia Arroyo - Sitio Web

Este es un sitio web profesional para la Dra. Nadia Arroyo, especialista en Armonización Orofacial y Estética Dental. El diseño está basado en Bootstrap y utiliza CDN para cargar las librerías necesarias.

## Características

- Diseño responsivo para todos los dispositivos
- Estructura de múltiples páginas (una por sección de menú)
- Navegación intuitiva
- Paleta de colores personalizada
- Secciones informativas sobre especialidades
- Formularios de contacto
- Galerías de servicios
- Testimonios de pacientes
- Sección de quiénes somos

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.0 (vía CDN)
- Font Awesome 6.0.0 (vía CDN)

## Paleta de Colores

El sitio utiliza una paleta de colores suave y elegante:

- Rosa claro (#f8d3db): Color primario, usado en la navegación y elementos destacados
- Amarillo suave (#f4f8d3): Color secundario, usado en fondos de secciones
- Azul turquesa (#a5ceca): Color de acento, usado en secciones de llamada a la acción
- Púrpura (#8b7ab5): Color oscuro, usado en el pie de página y elementos de contraste

## Estructura de Archivos

```
├── index.html                  # Página principal
├── css/
│   └── style.css               # Estilos personalizados
├── js/
│   └── script.js               # Scripts personalizados
├── img/                        # Carpeta para imágenes
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── hero-bg2.jpg
│   ├── doctor-profile.jpg
│   ├── patient-care.jpg
│   ├── service1.jpg
│   ├── service2.jpg
│   ├── service3.jpg
│   └── ... (más imágenes)
├── pages/                      # Páginas individuales para cada sección
│   ├── quienes_somos.html
│   ├── servicios.html
│   ├── armonizacion.html
│   ├── estetica.html
│   ├── testimonios.html
│   └── contacto.html
└── partials/                   # Componentes HTML reutilizables
    ├── header.html             # Encabezado común (no usado actualmente)
    └── footer.html             # Pie de página común (no usado actualmente)
```

## Instalación y Uso

1. Descarga o clona este repositorio
2. Abre el archivo `index.html` en cualquier navegador moderno
3. Navega entre las diferentes secciones a través del menú

## Desarrollo con Múltiples Vistas

Este sitio está estructurado con múltiples archivos HTML, uno por cada sección principal, en lugar de una sola página. Cada archivo contiene la estructura completa HTML, incluyendo encabezado y pie de página. Este enfoque permite:

- Mejor organización del contenido
- Páginas más ligeras y rápidas de cargar
- URLs específicos para cada sección
- Mejores prácticas SEO

## Personalización

### Cambiar Colores

Los colores principales están definidos como variables CSS en el archivo `style.css`:

```css
:root {
    --primary-color: #f8d3db; /* Rosa claro */
    --secondary-color: #f4f8d3; /* Amarillo suave */
    --accent-color: #a5ceca; /* Azul turquesa */
    --dark-color: #8b7ab5; /* Púrpura */
}
```

### Agregar/Modificar Secciones

Para agregar nuevas secciones, simplemente sigue el patrón utilizado en los archivos HTML existentes. Se mantiene un diseño coherente a través de todas las páginas.

## Imágenes

Reemplaza las imágenes en la carpeta `/img` con las fotos profesionales de la doctora, su clínica, procedimientos y resultados. Las imágenes deben estar optimizadas para web para garantizar tiempos de carga rápidos.

### Imágenes necesarias:

- logo.png: Logo profesional
- doctor-profile.jpg: Foto profesional de la Dra. Nadia Arroyo
- hero-bg.jpg: Imagen destacada para armonización orofacial
- hero-bg2.jpg: Imagen destacada para estética dental
- patient-care.jpg: Imagen de atención al paciente
- service1.jpg, service2.jpg, service3.jpg: Imágenes para servicios
- testimonial1.jpg, testimonial2.jpg, testimonial3.jpg: Fotos de pacientes para testimonios (con consentimiento)

## Servidor Local

Para probar el sitio con todas sus funcionalidades de navegación, puedes usar el servidor Node.js incluido:

```
node servidor.js
```

Esto iniciará un servidor en http://localhost:3000 donde podrás navegar entre todas las páginas.

## Licencia

Este proyecto está disponible como código abierto bajo los términos de la licencia MIT. 