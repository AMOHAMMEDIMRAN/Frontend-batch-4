// Function statement

function run() {
  const color = "red";

  switch (color) {
    case "green":
      console.log("This is green color");
      break;
    case "black":
      console.log("This is black color");
      break;
    case "red":
      console.log("This is blue color");
      break;
    default:
      console.log("Color not match");
  }
}

// Function expression

const add = function(a, b, c){
    console.log(a+b-c)
}

add(5,7,8)
