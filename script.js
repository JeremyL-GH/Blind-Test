function genererVideo() {
  var videos = [
    "https://www.youtube.com/watch?v=EK_LN3XEcnw",
    "https://www.youtube.com/watch?v=Gs069dndIYk",
    "https://www.youtube.com/watch?v=YvsZf70Cqzk",
    // Ajoute ici les URL des vidéos que tu veux inclure dans ta liste
  ];

  var randomIndex = Math.floor(Math.random() * videos.length);
  var videoUrl = videos[randomIndex];

  var videoContainer = document.getElementById("videoContainer");
  videoContainer.innerHTML = '<iframe width="560" height="315" src="' + videoUrl + '" frameborder="0" allowfullscreen></iframe>';
}