function toggleFavoritesImage() {
  const objectPosition = document.getElementsByClassName("favorites")[0].style.objectPosition;
  if(objectPosition === "0px")
    document.getElementsByClassName("favorites")[0].style.objectPosition = "0 -30px";
  else
    document.getElementsByClassName("favorites")[0].style.objectPosition = "0 0";
}

function toggleLikesImage() {
  const objectPosition = document.getElementsByClassName("likes")[0].style.objectPosition;
  console.log(objectPosition);
  if(objectPosition === "0px -60px")
    document.getElementsByClassName("likes")[0].style.objectPosition = "0 -90px";
  else
    document.getElementsByClassName("likes")[0].style.objectPosition = "0px -60px";
}