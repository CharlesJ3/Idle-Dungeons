/*
* Quick Index 
*
* - Canvas Settings
* - Objects

*/

/*
* -------------------------------
* Canvas Settings 
* -------------------------------
*/


//Main battle area
const canvas = document.getElementById('battleArea');
const context = canvas.getContext('2d');

//Drawing some simple borders and a background to help separate items
let drawBorders = function() {
  context.fillStyle = 'rgba(0,0,0,0.01)';

  //Fill the rectangle based on canvas width/height
  context.fillRect(0,0, canvas.width, canvas.height);

  //Scale the borders to be a little more visible
  context.scale(2,2);                           
  context.strokeStyle = 'maroon';

  //Borders for canvas
  const mainBorder = context.strokeRect(1, 1, 398, 298); 
  const topBorder = context.strokeRect  (1, 1, 398, 120);
  // const middleBorder = context.strokeRect(1, 1, 398, 298);

}

drawBorders();

/*
* -------------------------------
* Objects
* -------------------------------
*/


