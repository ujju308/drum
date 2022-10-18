var l = document.querySelectorAll(".drum").length;
for(var i=0;i<l;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
 var buttonInnerhtml = this.innerHTML;
    makeSound(buttonInnerhtml);
}) ;
};
document.addEventListener("keypress",function(event){
    makeSound(event.key);
})
function makeSound(key){
    switch(key){
        case "w":
           var audio = new Audio("https://github.com/ujju308/drum/raw/main/crash.mp3");
           audio.play();
           break;
        case "a":
            var audio = new Audio("SOUNDS/tom-2.mp3");
            audio.play();
            break;
            case "s":
                var audio = new Audio("SOUNDS/tom-3.mp3");
                audio.play();
                break;
                case "d":
                    var audio = new Audio("SOUNDS/tom-4.mp3");
                    audio.play();
                    break;
                    case "j":
                        var audio = new Audio("SOUNDS/snare.mp3");
                        audio.play();
                        break;
                    case "k":
                        var audio = new Audio("SOUNDS/kick-bass.mp3");
                        audio.play();
                    case "l":
                        var audio = new Audio("SOUNDS/crash.mp3");
                        audio.play();
    
           default:
    }
}
