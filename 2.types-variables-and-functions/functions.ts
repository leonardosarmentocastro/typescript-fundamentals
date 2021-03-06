module functions {

  // Those functions will generate the same javascript code
  var squareItSimple = function(h: number, w: number) {
    return h * w;
  }
  var squareItSimplest = (h: number, w: number) => h * w;



  // function declaration
  var hellowWorld: (name?: string) => void;
  // function implemetation
  hellowWorld = (name?: string) => {
    console.log("Hello " + (name || "unknown person"));
  }

  hellowWorld();
  hellowWorld("John");



  var squareIt:
    (rect: { h: number, w?: number }) => number;

  var rectA = { h: 7 };
  var rectB = { h: 7, w: 12 };

  squareIt = function(rect) {
    if(rect.w !== undefined) {
      return rect.h * rect.w;
    }

    return rect.h * rect.h;
  }
  console.log(squareIt(rectA));
  console.log(squareIt(rectB));

  
}
