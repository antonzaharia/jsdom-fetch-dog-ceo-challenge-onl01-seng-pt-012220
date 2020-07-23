console.log('%c HI', 'color: firebrick')
let allBreeds = [];
function addImage(src){
  let img = document.createElement("img");
  img.src = src;
  document.getElementById("dog-image-container").appendChild(img);
}
function addImages(items) {
  Object.keys(items.message).forEach(function(key) {
    let src = items.message[key];
    addImage(src);
  });
};
 fetch('https://dog.ceo/api/breeds/image/random/4')
 .then(function(response) {
   return response.json();
 })
 .then(function(json) {
   addImages(json);
 });
 // Second

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(function(response) {
  return response.json();
})
.then(function(json) {
  createBreeds(json);
});
function createBreeds(breeds) {
  Object.keys(breeds.message).forEach(function(key){
    const li = document.createElement('li');
    const container = document.getElementById('dog-breeds')
    li.textContent = key;
    allBreeds.push(key);
    container.appendChild(li);
    li.addEventListener('click', function(e){
      li.style.color = 'red';
    })
  });
};

const dropdown = document.getElementById("breed-dropdown");
dropdown.addEventListener('change', function(e){
  const letter = e.target.value;
  const filteredBreeds = allBreeds.filter((breed => breed.startsWith(letter)))
  console.log(filteredBreeds)
  const container = document.getElementById('dog-breeds')
  // container.innerHTML = createBreeds(filteredBreeds);
});
