var Song=[];//created the empty array for storing the key
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var PlayButtons = document.querySelectorAll(".play");


for (var i = 0; i < numberOfDrumButtons; i++) {
//first we select the element by query selector drum class the we featch the each butten by using indexing and add the event listerner click. whenever we click the function we call functions
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//we save the letter(innerHTML=the latter we type or click) by using this in buttonInnerHTML
    var buttonInnerHTML = this.innerHTML;
    
    //select the class of that button
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
// whenever we press the key function will call makeSound and ButtonAnimation
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

//for producing the song
function makeSound(key) {
//for checking the which key is pressed we use switvh case
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "b":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "e":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "e":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "f":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

      case "g":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "h":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "i":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
  
      case "j":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
  
      case "k":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "l":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      case "m":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
    
        case "n":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
    
        case "o":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
    
        case "p":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
    
        case "q":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
    
        case "r":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
    
        case "s":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
    
        case "t":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
    
          case "u":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
      
          case "v":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
      
          case "w":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
      
          case "x":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
      
          case "y":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
      
          case "z":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            
    default: console.log(key);

  }
}

//whenever we press the key we add animation to the button by using this function
function buttonAnimation(currentKey) {
//which button we pressed we store that button in currentkey. we are storing and selecting that button class in activeButton and we are adding pressed class for giving the animation
  var activeButton = document.querySelector("." + currentKey);
// whenver we press the button 
  activeButton.classList.add("pressed");
  //seting the time for animation effect otherwise it will remain same so we have to remove it
  //by using set time out function we are setting time as 100 ms
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
  
  var key1 = currentKey;
  Song.push(key1);

}


//if we cilick the play song then we call songPlay method
document.querySelector(".play").addEventListener("click",function(song){

  // for playing the song
  for (let i = 0; i < song.length; i++) {
    makeSound(song[i]);

    buttonAnimation(song[i]);
 
  }
});
console.log(song);


