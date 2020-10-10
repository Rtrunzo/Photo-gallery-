var ImageUrlInput = document.querySelector("#input");

var addImageButton = document.querySelector("#button");

var imageUrls = [
  'https://www.worldphoto.org/sites/default/files/default-media/Quill%20Creek%2C%20Haines%20Junction%20-%20%C2%A9%20Olivier%20Du%20Tre%CC%81.jpg',
  'https://www.guillenphoto.com/data/blog/2019/017-chronique-pourquoi-photographier-paysages-bw-II/images/photographing-landscapes-in-black-and-white-blue-nile-waterfall-amar-guillen-landscape-photographer.jpg',
  'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/02/coogee_pool_1_of_2.jpg'
]

var gallery = document.querySelector("main");

addImageButton.addEventListener('click', function (image) {
  if (ImageUrlInput.value !== "") {
  imageUrls.push(ImageUrlInput.value);
  }
  ImageUrlInput.value = " ";
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = " ";
  for ( var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement("img");
    imageElement.className = "gallery-image";
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery()
