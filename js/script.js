// Configuración del mapa de Google
const mapa = document.getElementById('mapa');
const latLng = { lat: -34.603683, lng: -58.381557 }; // Coordenadas de tu ubicación
const zoom = 14;

const mapaGoogle = new google.maps.Map(mapa, {
    center: latLng,
    zoom: zoom
});

const marker = new google.maps.Marker({
    position: latLng,
    map: mapaGoogle,
    title: 'Tu ubicación'
});

// Validación del formulario
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        // Enviar el formulario mediante AJAX o fetch
        console.log('Formulario enviado');
    } else {
        console.log('Por favor, complete todos los campos');
    }
});


