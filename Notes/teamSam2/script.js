const samArray = ["https://s2.r29static.com/bin/entry/f4d/340x408,85/2144717/image.webp",
"https://akns-images.eonline.com/eol_images/Entire_Site/2018127/rs_1024x759-180227113631-1024-brandon-flynn-sam-smith-pda-kissing.jpg?fit=inside|900:auto&output-quality=90",
"http://www.sactownmag.com/images/cache/cache_b/cache_9/cache_8/ScreenShot2019-01-23at12.09.56PM-2569a89b.jpeg?ver=1570358093&aspectratio=0.66403607666291"];

function imageNode(imgUrl) {
  const node = document.createElement('img');
  node.setAttribute('src', imgUrl);
  return node;
}


const mainContent = document.querySelector('#main-content');

function addImages() {
  const scrollY = window.scrollY;
  mainContent.innerHTML = '';
  samArray.forEach(url => {
    const node = imageNode(url);
    mainContent.appendChild(node);
  })
  window.scrollY = scrollY;
}

addImages()

// const nodes = samArray.map(imageNode)
// mainContent.appendChild



const form = document.querySelector('#sam-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#image_url');
  const imageURL = input.value;
  samArray.push(imageURL);

  addImages()
})
