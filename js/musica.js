// Variables
const playlist = document.getElementById("playlist");
const videoPlayer = document.getElementById("video-player");

// Reproducir canción seleccionada
playlist.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("playlist-item")) {
    const videoUrl = e.target.getAttribute("data-video");

    // Cambiar video
    cambiarVideo(videoUrl);

    // Resaltar canción activa
    actualizarCancionActiva(e.target);
  }
});

// Función para cambiar el video
function cambiarVideo(url) {
  videoPlayer.src = url;
}

// Función para resaltar la canción activa
function actualizarCancionActiva(elementoSeleccionado) {
  const items = playlist.querySelectorAll(".playlist-item");
  items.forEach((item) => item.classList.remove("active"));
  elementoSeleccionado.classList.add("active");
}
