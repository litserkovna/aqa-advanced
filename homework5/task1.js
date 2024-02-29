//Function declaration
function calculateRectangleArea(width, height) {
  const area = width * height;
  return area;
}
console.log(calculateRectangleArea(5, 10));
//Function expression
const calculateRectangleAreaExpression = function (width, height) {
  const area = width * height;
  return area;
};
console.log(calculateRectangleAreaExpression(5, 5));
//Arrow function expression
const calculateRectangleAreaArrow = (width, height) => {
  const area = width * height;
  return area;
};
console.log(calculateRectangleAreaArrow(1, 5));
