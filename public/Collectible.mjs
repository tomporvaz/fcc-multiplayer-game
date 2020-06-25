let appleImg = new Image();
appleImg.src = "data:image/gif;base64,R0lGODlhHgAeAKIEAP8AAAAAAKBAAP/////PDwAAAAAAAAAAACH5BAEAAAQALAAAAAAeAB4AAAN7SLrc/jDKGUOgWAUhbtZWCHKhKAVAqlokqqbeY73w1rmvJdM0x+cO3M/3qzWExeSKgVQmY4Sm8weVTmnVqzOrfTK7qsEAuLAqxWQNOIVelteANuxopskBuqD2Dv3C8RB1Sn1MgliER2CIQUIzhx+NTYsVJiV5H5iZmgQJADs=";

let bellImg = new Image();
bellImg.src = "data:image/gif;base64,R0lGODlhHgAeAKIEAP//AAAAAAAA///////PDwAAAAAAAAAAACH5BAEAAAQALAAAAAAeAB4AAAOBSLrc/vCFGaJ1AWhQb6TZBnpNqIEbRypTiordZaa06811HX8uTu+QWSt3up18OlloSDzyYM1fsBe1SajV4hWaVW27UgyyOylhwVrWGb0TjqPtNTiOJtLryUVIwO/7B4ADfnxpBHuDf4GIhYYBiImAiGUYj32BgoNADCCcnZwroA4JADs=";

let cherryImg = new Image();
cherryImg.src = "data:image/gif;base64,R0lGODlhHgAeAKIEAP8AAAAAAKBAAP/////PDwAAAAAAAAAAACH5BAEAAAQALAAAAAAeAB4AAAOQSLrc/jDKSVu4odIgusiag3EeGC6kV57EqKpmlX7keF5wzbbdiH8TH6aH0kUCgKSyZ6rFREhlkqn4PS3SqUBqvWKzHa7zcsxmL1ouJGpOogFhJVmUHAzE0rj6a8cvt2d0Sn0Ab21ygnV3hWyHhQ+GclGEZl4tlZOLlUdCjZSIIZ6aoKGNYjuXbZYynaiurw8JADs=";

let melonImg = new Image();
melonImg.src = "data:image/gif;base64,R0lGODlhHgAeAKIFAAD/AAAAAP//AABg/wD////PDwAAAAAAACH5BAEAAAUALAAAAAAeAB4AAAOeWLoawTBKGAh5M896nf/axlkkiYVUqV6o9FlgK8KnHAUAMAx5bX+5Xc/zyxkBAsGx13IskcqlI4SD7pJPLMBHySWv0aOWy6h6w7qBlikSo8HH6S2oRp/vRm4VvtSut3NQR3x0Y4F/hGmGXYp2gk+AjIl4T2RORl91iXIubmCbGmaYjosbWaRRZGVVf3icoZSjbE0ebjE2Dba4Lh+qDAkAOw==";

let keyImg = new Image();
keyImg.src = "data:image/gif;base64,R0lGODlhHgAeAJEDAAAAAAAA////AP/PDyH5BAEAAAMALAAAAAAeAB4AAAJpnI+pywoPm0Qg2Asmg/Varh3dx41BFpqlGg6mB5/tG2NzXaMajesTn7vhYL4fRCB4IEstyhLwbDqeyKXUmYRWi02tMnvFfrlSbyQsPqMNZuvaRQWv29t53B2mP976N9vsJ4IX6EJGGFIAADs=";

let galaxianBossImg = new Image(); //fruit_misc.gif
galaxianBossImg.src = "data:image/gif;base64,R0lGODlhHgAeAKIEAAAAAP//AAAA//8AAP/PDwAAAAAAAAAAACH5BAEAAAQALAAAAAAeAB4AAAOXSLrc/jDKSWsFwN4xsiaYg3FhU5qC4CkA53YMkK6LrNbt2602zc4snc7TE80wOSEJCUQJAoEXlDN1QZuxVJUaHWy9AWxNCy1XzWbx74k+t8M3J/mNTqlBdjY9bfexbGQYUIJwRxGAbISEeX4miIqPjUZ9AIOPGhhHloYfPZUBmXEfIEiWJ6M1g6gQn5KorausrrG0tbYRCQA7";

let orangeImg = new Image();
orangeImg.src = "data:image/gif;base64,R0lGODlhHgAeAKIEAP9gAAAAAAD/AKBAAP/PDwAAAAAAAAAAACH5BAEAAAQALAAAAAAeAB4AAAN4SLrc/jDKOYMNNAfBBc7PtXUiuATD0K2kSaAqu34gbMkWJVrpzdKRAGAISBkHRCIwJCQeU8lhDtKMFpFWJTN75UqXVa9YygiPvUDzOZtej9tudDkuP9G58HsUrHZPG31rS3Z6AIMKgWeHiBeKFxqKLi87lJKWlyYJADs=";

let strawberryImg = new Image();
strawberryImg.src = "data:image/gif;base64,R0lGODlhHgAeAKIEAP8AAAAAAAD/AP/////PDwAAAAAAAAAAACH5BAEAAAQALAAAAAAeAB4AAAOKSLrc/jDKCUOgWIUxbnZWuHWihwVCqnKqakpWm7KyNQVADsiyDrwNi4/X8tlAvuROoOTkgAScUpdqDp5IgHOa2xqz3mkYG7R2r9xf1rcdJ6HSdDIMl5t10Kg07H7mNWdsaEp/gHaEMIeIMHFag45+J4KTahlCaUcfjYsfGiF+mZ0MUoWieqaoqaIJADs=";

let fruitArr = ['cherry', 'strawberry', 'orange', 'apple', 'melon', 'galaxianBoss', 'bell', 'key'];
let fruitPts = {
  cherry: 100,
  strawberry: 300,
  orange: 500,
  apple: 700,
  melon: 1000,
  galaxianBoss: 2000,
  bell: 3000,
  key: 5000
}

class Collectible {
  constructor(id, score, x, y) {
    this.id = id;
    this.score = score;
    this.x = x;
    this.y = y;
    this.fruitImg = cherryImg;

  }

  draw(context, canvas) {
    context.drawImage(this.fruitImg, this.x, this.y);
  }

  renew() {
    const canvas = document.getElementById('game-window');
    //randomly choose new fruit, x, and y coordinates
    this.x = Math.floor(Math.random() * (canvas.width - 20));
    this.y = Math.floor(Math.random() * (canvas.height - 20));
    this.fruitImg = [cherryImg, strawberryImg, orangeImg, appleImg, melonImg, galaxianBossImg, bellImg, keyImg][Math.floor(Math.random() * 8)];//randomly choose a random fruit
    
    console.log(`fruit location (${this.x}, ${this.y})`)

  }

}




/*
Note: Attempt to export this for use
in server.js
*/
try {
  module.exports = Collectible;
} catch (e) { }

export default Collectible;
