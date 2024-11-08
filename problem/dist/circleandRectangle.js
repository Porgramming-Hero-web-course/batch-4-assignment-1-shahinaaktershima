"use strict";
const calculateShapeArea = (shape) => {
    let area;
    if (shape.shape === 'circle') {
        area = Math.PI * shape.radius * shape.radius;
    }
    else if (shape.shape === "rectangle") {
        area = shape.height * shape.width;
    }
    else {
        area = 0;
    }
    return parseFloat(area.toFixed(2));
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 3 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 8,
});
console.log(circleArea, rectangleArea);
