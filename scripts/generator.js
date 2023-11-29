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
  var randIndex = Math.floor(Math.random() * 22);
  var randGif = document.getElementById("randomGif");
  randGif.src = "images/gifs/" + gifNames[randIndex] + ".gif";
  randGift.alt = gifNames[randIndex];
}
