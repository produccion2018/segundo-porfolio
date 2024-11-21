// Referencias a los elementos DOM
const playlist = document.getElementById("playlist");
const videoPlayer = document.getElementById("video-player");

// Escuchar clics en la playlist
playlist.addEventListener("click", (event) => {
  const clickedElement = event.target;

  // Verificar que se ha hecho clic en un elemento válido de la playlist
  if (clickedElement && clickedElement.classList.contains("playlist-item")) {
    const videoUrl = clickedElement.dataset.video; // Acceso más directo al atributo 'data-video'

    if (videoUrl) {
      cambiarVideo(videoUrl); // Cambiar el video
      actualizarCancionActiva(clickedElement); // Resaltar la canción activa
    }
  }
});

/**
 * Cambia el video en el reproductor.
 * @param {string} url - URL del video a reproducir.
 */
function cambiarVideo(url) {
  videoPlayer.src = url;
}

/**
 * Resalta la canción activa en la lista de reproducción.
 * @param {HTMLElement} elementoSeleccionado - Elemento de la playlist seleccionado.
 */
function actualizarCancionActiva(elementoSeleccionado) {
  // Remover clase 'active' de todos los elementos
  playlist.querySelectorAll(".playlist-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Agregar clase 'active' al elemento seleccionado
  elementoSeleccionado.classList.add("active");
}
