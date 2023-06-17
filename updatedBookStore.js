let count = 0;
function saveForLater(imageUrl) {

  let savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
  // This pushes the images source to the array "savedImages".
  savedImages.push(imageUrl)
  //This sets the localStorage as the new array.
  localStorage.setItem("savedImages", JSON.stringify(savedImages))
  //count += 1;
  alert(
    `You have added ${savedImages.length} number of book(s) to watch later.`
  ); 
  

  //localStorage.setItem("buttonValue", savedBooks);
  //return false;
}
// let saveClick1 = document.getElementById("saveClick1").Value;
// let saveClick2 = document.getElementById("saveClick2").Value;
// let saveClick3 = document.getElementById("saveClick3").Value;
// let saveClick4 = document.getElementById("saveClick4").Value;
// let saveClick5 = document.getElementById("saveClick5").Value;
// let saveClick6 = document.getElementById("saveClick6").Value;
// let saveClick7 = document.getElementById("saveClick7").Value;
// let saveClick8 = document.getElementById("saveClick8").Value;
// let saveClick9 = document.getElementById("saveClick9").Value;
// let saveClick10 = document.getElementById("saveClick10").Value;

// let saveClick = [
//   saveClick1,
//   saveClick2,
//   saveClick3,
//   saveClick4,
//   saveClick5,
//   saveClick6,
//   saveClick7,
//   saveClick8,
//   saveClick9,
//   saveClick10,
// ];

// for (let i = 0; i < saveClick.length; i++) {
//   savedBooks = saveClick[i];
//   return savedBooks;
// }
