function generateRandomGif() {
  var gifNames = [
    "bruh-cat",
    "carRide-cat",
    "cat-hit-tiger",
    "cat-stuck-in-pot",
    "catJam",
    "croc-cat",
    "cry-cat",
    "dapup-cat",
    "exploding-cat",
    "happycat",
    "mimimi-cat",
    "popeyes-cat",
    "sad-bed-cat",
    "sad-bench-cat",
    "smiley-cat",
    "sushi-cat",
    "suspended-cat",
    "teapot-cat",
    "thumbsup-cat",
    "tonguestuck-cat",
    "wat-cat",
    "wooyay-cat",
  ];
  var randIndex = Math.floor(Math.random() * gifNames.length);
  var randGif = document.getElementById("randomGif");
  randGif.src = "images/gifs/" + gifNames[randIndex] + ".gif";
  randGif.alt = gifNames[randIndex];
  var responses = [
    "WOW!!",
    ":00000",
    "WOAH!!",
    "SICK CAT!?",
    "You got pretty lucky",
    "Nice cat!!!",
    "very nice",
  ];
  document.getElementById("randomGifCaption").innerHTML =
    responses[Math.floor(Math.random() * responses.length)];
}
