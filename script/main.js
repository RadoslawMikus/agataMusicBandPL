const playButtons = document.querySelectorAll(".playButton");
const music = {
  audio1: new Audio("././music/1.mp3"),
  audio2: new Audio("././music/2.mp3"),
  audio3: new Audio("././music/3.mp3"),
  audio4: new Audio("././music/4.mp3"),
  audio5: new Audio("././music/5.mp3"),
  audio6: new Audio("././music/6.mp3"),
};

playButtons.forEach((playButton, index) => {
  playButton.setAttribute("id", "audio" + (index + 1));
  playButton.addEventListener("click", (e) => {
    // --------------------------
    // IF CLICKED IS NOT PLAYING
    // STOP ALL AND PLAY CLICKED
    // --------------------------
    if (music[e.target.id].paused) {
      for (let i = 1; i <= Object.keys(music).length; i++) {
        if (!music["audio" + i].paused) {
          music["audio" + i].pause();
          music["audio" + i].currentTime = 0;
          playButtons.forEach((button) =>
            button.setAttribute("src", "img/playIcon.png")
          );
        }
      }
      music["audio" + (index + 1)].play();
      playButton.setAttribute("src", "img/pauseIcon.png");

      // --------------------------
      // IF CLICKED IS PLAYING
      // JUST PAUSE CLICKED
      // --------------------------
    } else {
      music[e.target.id].pause();
      playButton.setAttribute("src", "img/playIcon.png");
    }
  });
});
