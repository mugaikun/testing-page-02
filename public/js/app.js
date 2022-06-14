console.log("Desde fronted app.js OK");

document.addEventListener("click", (e) => {
  if (e.target.dataset.short) {
    console.log(e.target.dataset.short);
    const url = `http://localhost:3000/${e.target.dataset.short}`;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }
});
