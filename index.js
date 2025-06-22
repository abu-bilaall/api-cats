const img = document.querySelector("img");
const searchError = document.querySelector("p.error");

async function summonCat(input = "cats") {
  try {
    let catRequest = new Request(
      `https://api.giphy.com/v1/gifs/translate?api_key=WSykRl2DGkakEq1NstuZyd2AY7kJv7jz&s=${input}`,
      { mode: "cors" }
    );

    const response = await fetch(catRequest);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const catData = await response.json();
    if (Array.isArray(catData.data) && catData.data.length === 0) {
      img.src = "./cat-not-found.png";
    } else {
      img.src = catData.data.images.original.url;
    }
  } catch (error) {
    searchError.textContent = error;
  }
}

summonCat();

const summon = document.querySelector("button");
summon.addEventListener("click", () => {
  summonCat();
});

const summonInput = document.querySelector("input");
summonInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    summonCat(summonInput.value);
    summonInput.value = "";
  }
});
