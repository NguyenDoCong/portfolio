window.onload = () => {
  var elements = document.getElementsByClassName("toggle-element");
  for (let element of elements) {
    element.onclick = () => {
      var x = document.getElementById(element.dataset.toggle);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
  }
};
