alert("TESTING");

// document.querySelector("button").addEventListener("click" , handleClick);

//Making sound on the basis of the key that is gettting inputted

function sound(char)
{
    switch (char) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();                
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();                
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();                
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();                
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();                
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();                
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();                
            break;
    
        default: console.log("BHAISAHAB!");
            break;
    }
}

//The function for handleing the click feature on the button ie what is to be done when clicked

function handleClick()
{
    // this is same as the word in C++ that is it points to the selected Element.

        console.log(this.innerHTML);
        // this.style.color = "white";
        var letter = this.innerHTML;
        sound(letter);
        buttonAnimation(letter);
    
}

//the function for assigning the click waala feature to all the buttons

var drums = document.getElementsByClassName("drum");

for(var i=0 ; i< drums.length ; i++)
{
    drums[i].addEventListener("click" , handleClick);
}

//function for handling all the keyboard inputs

function keyPress(event)
{
    // console.log(event);
    var x = event.key;
    console.log(x);
    sound(x);
    buttonAnimation(x);
    // alert("Key Pressed");
}

//statement for providing the keypress feature to the entire document and then calling keyPress function

document.addEventListener("keypress" , keyPress );

//function for button animation that is if that fn called the =n the feel of being pressed

//setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);
//The above statement for the time after which the code inside it is to be executed

function buttonAnimation(buttonKey)
{
  var activeButton = document.querySelector("."+ buttonKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);  
}

