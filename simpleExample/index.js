var rect=require('./rectangle')

const solveRect = (l, b) => {
  console.log("Ingresed parameters are l " + l + "  and b " + b);
  if (l <= 0 || b <= 0) {
    console.log("Ingresed parameters must be highest than zero");
  } else {
    console.log("The perimeter of the body is =" + rect.perimeter(l, b));
    console.log("The area of the body is =" + rect.area(l, b));
  }
};

solveRect(0, 4);
