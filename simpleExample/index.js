const rectangle = require("./rectangle");
var rect = require("./rectangle");

const solveRect = (l, b) => {
  console.log("Ingresed parameters are l " + l + "  and b " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error", err.message);
    } else {
      console.log("the area of the rectangle is= " + rectangle.area());
      console.log(
        "the perimeter of the rectangle is= " + rectangle.perimeter()
      );
    }
  });
};

solveRect(2, 4);
