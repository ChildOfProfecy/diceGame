
var btn = document.querySelectorAll("button");


function valuePressed(btnval){
    console.log(btnval);
    switch (btnval) {
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
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;    
    
        default:
            break;
    }
}

btn.forEach(btn=>{
    btn.addEventListener("click",function(){
        var btnval = this.innerHTML;
        valuePressed(btnval);
        animation(btnval);
        // if(this.innerHTML=="w"){
        //     var audio = new Audio("sounds/tom-1.mp3");
        //     audio.play();
        // }
        // if(this.innerHTML=="a"){
        //     var audio = new Audio("sounds/tom-2.mp3");
        //     audio.play();
        // }
        // if(this.innerHTML=="s"){
        //     var audio = new Audio("sounds/tom-3.mp3");
        //     audio.play();
        // }
        // if(this.innerHTML=="d"){
        //     var audio = new Audio("sounds/tom-4.mp3");
        //     audio.play();
        // }
        // if(this.innerHTML=="j"){
        //     var audio = new Audio("sounds/crash.mp3");
        //     audio.play();
        // }
        // if(this.innerHTML=="k"){
        //     var audio = new Audio("sounds/kick-bass.mp3");
        //     audio.play();
        // }
        // if(this.innerHTML=="l"){
        //     var audio = new Audio("sounds/snare.mp3");
        //     audio.play();
        // }
    })
});


btn.forEach(btn=>{
    btn.addEventListener("keydown",(k)=>{
        var btnval = k.key;
        valuePressed(btnval);
        animation(btnval);

    })
});



function animation(pressedKey){
    var currKey = document.querySelector("."+pressedKey);

    currKey.classList.add("pressed");

    setTimeout(()=>{currKey.classList.remove("pressed");},100);
}