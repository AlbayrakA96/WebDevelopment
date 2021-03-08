let heroTyper = document.getElementById("hero__typer");
var typewriter = new Typewriter(heroTyper, {
  loop: true,
});
typewriter
  .typeString("Hello, I'm Abdusselam Albayrak.")
  .pauseFor(500)
  .deleteChars(20)
  .typeString("<strong>a Front-end Developer.</strong>")
  .pauseFor(1500)
  .deleteAll()
  .typeString("<strong>Abdusselam Albayrak.</strong>")
  .pauseFor(1533300)
  //   .typeString('Strings can be removed')
  //   .pauseFor(2500)
  //   .deleteChars(7)
  //   .typeString('<strong>altered!</strong>')
  //   .pauseFor(2500).
  .deleteAll()
  .start();