const gallery = document.getElementById("gallery")
console.log(gallery)

gallery.innerHTML = "<figure><img src='https://unsplash.it/200/200' alt='random img'/><figcaption>Fig.1</figcaption></figure>"

gallery.innerHTML += "<figure><img src='https://unsplash.it/200/200' alt='random img'/><figcaption>Fig.2</figcaption></figure>"

gallery.innerHTML += "<figure><img src='https://unsplash.it/200/200' alt='random img'/><figcaption>Fig.3</figcaption></figure>"

gallery.style.display = "flex"