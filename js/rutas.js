const rutasPermitidas = {
    'inicio': 'inicio',
    'tratamientos': 'tratamientos',
    'planchas': 'planchas',
    'rizadoras-secadoras': 'rizadoras-secadoras',
    'contactame': 'contactame'
};

const titulos = {
    'inicio': 'AURELIA HAUTE COIFFURE | Alta Cosmética Capilar',
    'tratamientos': 'Tratamientos Capilares | AURELIA PARIS',
    'planchas': 'Planchas de Alta Gama | AURELIA PARIS',
    'rizadoras-secadoras': 'Rizadoras y Secadoras | AURELIA PARIS',
    'contactame': 'Contáctame VIP | AURELIA PARIS'
};

function limpiarUrl(rutaActual = 'inicio') {
    const pathLimpio = window.location.pathname.replace(/\/(index\.html|inicio|tratamientos|planchas|rizadoras-secadoras|contactame)\/?$/i, '/') || '/';
    const titulo = titulos[rutaActual] || titulos['inicio'];
    window.history.replaceState({ seccion: rutaActual }, titulo, pathLimpio);
    document.title = titulo;
}

function irASeccion(nombreRuta) {
    const rutaValida = (nombreRuta in rutasPermitidas) ? nombreRuta : 'inicio';
    const elemento = document.getElementById(rutasPermitidas[rutaValida]);

    limpiarUrl(rutaValida);

    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    limpiarUrl('inicio');

    document.querySelectorAll('[data-ruta]').forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            irASeccion(enlace.getAttribute('data-ruta'));
        });
    });
});