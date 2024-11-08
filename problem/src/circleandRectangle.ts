type Circle={
    shape: "circle";
    radius: number;
}

type Rectangle={
    shape:"rectangle",
    height:number,
    width:number
}

type Shape= Circle|Rectangle

const calculateShapeArea=(shape:Shape):number=>{
    let area: number;
    if(shape.shape==='circle'){
        area=Math.PI*shape.radius*shape.radius;
      
    }
    else if(shape.shape==="rectangle"){
        area =shape.height*shape.width;
       
    }
    else{
        area=0;
    }

    return parseFloat(area.toFixed(2))
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 3 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 8,
  });
  console.log(circleArea,rectangleArea)