const img = document.querySelector("img");

function giphyCats() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=WSykRl2DGkakEq1NstuZyd2AY7kJv7jz&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

giphyCats();

const summon = document.querySelector("button");
summon.addEventListener('click', () => {
    giphyCats();
});