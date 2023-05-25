const button = document.createElement("button");
button.textContent = "button";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const img = document.querySelector("img");
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=tX4k4LcZ6GkHC0ZxXpRMsTXPDWO2Ofbx&s=monkey",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
});
