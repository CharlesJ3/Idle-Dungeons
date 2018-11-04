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
  const topBorder = context.strokeRect(1, 1, 398, 120);
  const bottomBorder = context.strokeRect(1, 1, 398, 147.5);
  const middleBorder = context.strokeRect(200, 149, 1, 150);

}

drawBorders();

/*
* -------------------------------
* Objects
* -------------------------------
*/

const player = {
  title : 'the Titleless (is this possible? isn\'t \"Titleless\" a title?',
  level : 0,
  rank : '',
  prestigeFieldOneUnlock : 0,
  prestigeFieldTwoUnlock : 0,
  prestigeFieldThreeUnlock : 0,
  prestigeFieldFourUnlock : 0,
  prestigeFieldFiveUnlock : 0,
  prestigeFieldSixUnlock : 0,
  prestigeFieldOneUnlock : 0,
  prestigeFieldOneUnlock : 0,
  prestigeFieldOneUnlock : 0,
  prestigeFieldOneUnlock : 0,
}

class Pet {
  constructor(name, title, level, type, typeTwo, baseAttack, speed, cost, rank, equipOne, equipTwo, animateOne, animateTwo, animateThree, description) {
    this.name = name,
    this.title = title,
    this.level = level,
    this.type = type,
    this.typeTwo = typeTwo,
    this.baseAttack = baseAttack,
    this.speed = speed,
    this.cost = cost,
    this.rank = rank,
    this.equipOne = equipOne,
    this.equipTwo = equipTwo,
    this.animateOne = animateOne,
    this.animateTwo = animateTwo,
    this.animateThree = animateThree,
    this.description = description;
  }
}

class Enemy {
  constructor(name, title, level, type, typeTwo, baseAttack, speed, rank, equipOne, equipTwo, animateOne, animateTwo, animateThree, description) {
    this.name = name,
    this.title = title,
    this.level = level,
    this.type = type,
    this.typeTwo = typeTwo,
    this.baseAttack = baseAttack,
    this.speed = speed,
    this.rank = rank,
    this.equipOne = equipOne,
    this.equipTwo = equipTwo,
    this.animateOne = animateOne,
    this.animateTwo = animateTwo,
    this.animateThree = animateThree,
    this.description = description;
  }
}


/*
* -------------------------------
* Menu System
* -------------------------------
*/

// REFACTOR : 
const switchMenuOne = () => {
  $( "#menuSystemOne" ).css('display', 'inherit');
  $( "#menuSystemTwo" ).css('display', 'none');
}

const switchMenuTwo = () => {
  $( "#menuSystemOne" ).css('display', 'none');
  $( "#menuSystemTwo" ).css('display', 'inherit');
}

const switchMenuThree = () => {
  $( "#menuSystemThree" ).css('display', 'inherit');
  $( "#menuSystemFour" ).css('display', 'none');
}

const switchMenuFour = () => {
  $( "#menuSystemThree" ).css('display', 'none');
  $( "#menuSystemFour" ).css('display', 'inherit');
}
