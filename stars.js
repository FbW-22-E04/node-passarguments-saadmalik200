function DisplayStars(num = 10, text = "hi") {
  let stars = "";
  for (let i = 0; i < num; i++) {
    stars += "*";
  }
  console.log(stars);
  console.log(text);
  console.log(stars);
}

export default DisplayStars;
