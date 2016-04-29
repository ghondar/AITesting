

var perceptron = new Architect.Perceptron(2,60,3);

var iteration = 0;

var c = document.getElementById("canvas");
var ctx=c.getContext("2d");

function iterate(){
  for (var x = 0; x < 125; x+=1){
    for(var y = 0; y < 125; y+=1){
      var dynamicRate =  .01/(1+.0005*iteration);
      perceptron.activate([x/125,y/125]);
      perceptron.propagate(dynamicRate, pixel(x,y));
    }
  }
  preview();
}

var pixel = function(x,y){

  var red = ((125 * y) + x) * 4;
  var green = ((125 * y) + x) * 4 + 1;
  var blue = ((125 * y) + x) * 4 + 2;
  return [red / 255 / 255, green / 255 / 255, blue / 255 / 255];
}
var count = 0;

function preview(){
  iteration++;
  for (var x = 0; x < 125; x++)
    {
      for(var y = 0; y < 125; y++)
      {
        var rgb = perceptron.activate([x/125,y/125]);
        var color = `rgb(${(rgb[0]*255).toFixed(0)}, ${(rgb[1]*255).toFixed(0)}, ${(rgb[2]*255).toFixed(0)})`
        ctx.fillStyle=color;
        ctx.fillRect(x*10,y*10,10,10);
        
        if(count == 0){
          console.log(x*10, y*10)
          console.log(color)
          break;
        }
        else{
          console.log(x*10,y*10)
          count++
        }
        // console.log(rgb[0])
        // console.log(rgb.map(function(value){
        //   return value * 255
        // }))
      }
    }
} 
iterate()