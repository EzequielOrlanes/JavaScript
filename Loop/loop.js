const videoGame = ["PS1", "PS2", "PS3", "PS4", "PS5", "PS6"];

for (const numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

const i = 0;
while (i < 10) {
  console.log(i);
  i += 5;
}

for (const item = 0; item < videoGame.length; item++) {
  console.log(videoGame[item]);
  if (videoGame[item] === "PS4") {
    break;
  }
}
const videoGames = ["PS1", "PS2", "PS3", "PS4", "PS5", "PS6"];
videoGame.forEach(function (videoGames, index) {
  //faz um for de cada item do vetor vídeo game
  console.log(videoGame, index);
});
