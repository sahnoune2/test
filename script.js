const container = document.createElement("div");
container.setAttribute("class", "cont");
document.body.appendChild(container);

const search = document.createElement("input");
search.setAttribute("type", "text");
container.appendChild(search);

const button = document.createElement("button");
button.textContent = "button";
container.appendChild(button);

button.addEventListener("click", () => {
  const img = document.querySelector("img");
  let result = search.value;
  if (result === "") {
    alert("u didnt wreite anything");
  } else {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=tX4k4LcZ6GkHC0ZxXpRMsTXPDWO2Ofbx&s=${result}`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
      });
  }
});
