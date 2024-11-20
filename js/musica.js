// Lista de videos
const videos = [
    {
        title: "Mi Primera Canción",
        url: "https://www.youtube.com/embed/VIDEO_ID1"
    },
    {
        title: "Melodía del Alma",
        url: "https://www.youtube.com/embed/VIDEO_ID2"
    },
    {
        title: "Ritmos del Futuro",
        url: "https://www.youtube.com/embed/VIDEO_ID3"
    }
];

// Selecciona el contenedor de videos
const videoList = document.getElementById('video-list');

// Renderiza los videos
videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';

    const iframe = document.createElement('iframe');
    iframe.src = video.url;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    const title = document.createElement('div');
    title.className = 'video-title';
    title.textContent = video.title;

    videoItem.appendChild(iframe);
    videoItem.appendChild(title);

    videoList.appendChild(videoItem);
});

