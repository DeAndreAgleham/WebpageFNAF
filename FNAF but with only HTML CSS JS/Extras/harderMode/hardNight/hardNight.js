//AUDIO
var officeAudio = document.getElementById("officeAudio").autoplay = true;
var officeAudio = document.getElementById("officeAudio").loop = true;
var officeAudio = document.getElementById("officeAudio").volume = 0.5;
var freddyJumpscare = document.getElementById("freddyJumpscare");
var bonnieJumpscare = document.getElementById("bonnieJumpscare");
var chicaJumpscare = document.getElementById("chicaJumpscare");
var foxyJumpscare = document.getElementById("foxyJumpscare");
var jumpscareDeny = document.getElementById("jumpscareDeny");
var freddyLaugh = document.getElementById("freddyLaugh");
var powerOut = document.getElementById("powerOutage");
var musicBox = document.getElementById("freddyMusic");
var foxyLaugh = document.getElementById("foxyLaugh");
var foxyRun = document.getElementById("foxyRun");
var botAtDoor = document.getElementById("botAtDoor");

//SHorter Vars
var rt = document.getElementById("rightDoorControl");
var lt = document.getElementById("leftDoorControl");
var rl = document.getElementById("rightDoorLight");
var ll = document.getElementById("leftDoorLight");

//Clock Functions
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

setTimeout(function morningTime(){
    document.location.href = "/Extras/harderMode/hardEndNight/hardEndNight.html"
}, 359900)

setTimeout(function morningTime(){
    count = 0;
}, 340000)

//Maybe Battery Function
var count=100;
let speed = 15000;

timer();

function timer(){
    count--;
    document.getElementById("battery").innerHTML = "Battery: " + count + "%";

    if (count <= 0){
        document.getElementById("hTML").style.backgroundColor = "rgb(20, 20, 20)";
        rt.style.backgroundColor = "rgb(85, 0, 0)";
        rt.style.borderColor = "rgb(85, 0, 0)";
        lt.style.backgroundColor = "rgb(85, 0, 0)";
        lt.style.borderColor = "rgb(85, 0, 0)";
        rl.style.backgroundColor = "rgb(85, 85, 85)";
        rl.style.borderColor = "rgb(85, 85, 85)";
        ll.style.backgroundColor = "rgb(85, 85, 85)";
        ll.style.borderColor = "rgb(85, 85, 85)";
        document.getElementById("rightDoor").style.height = "5px";
        document.getElementById("leftDoor").style.height = "5px";
        document.getElementById("leftDoor").style.bottom = "2650px";
        rt.value = "CLOSE";
        lt.value = "CLOSE";
        rl.value = "OFF";
        ll.value = "OFF";
        document.getElementById("rightDarkness").style.opacity = "1";
        document.getElementById("leftDarkness").style.opacity = "1";
        document.getElementById("clock").style.opacity = "0";
        document.getElementById("battery").style.opacity = "0";
        document.getElementById("rightDoorControl").disabled = true;
        document.getElementById("leftDoorControl").disabled = true;
        document.getElementById("rightDoorLight").disabled = true;
        document.getElementById("leftDoorLight").disabled = true;
        document.getElementById("officeAudio").autoplay = false;
        document.getElementById("officeAudio").loop = false;
        powerOut.play();
        setTimeout(function(){
            document.getElementById("noPower").style.opacity = "1";
            musicBox.play();
            setTimeout(function(){
                document.getElementById("noPower").style.opacity = "0";
                musicBox.pause();
                musicBox.currentTime = 0;
                document.getElementById("office").style.opacity = "0";
                document.getElementById("chicaDoor").style.bottom = "10000px"
                document.getElementById("bonnieDoor").style.bottom = "10000px"
                document.getElementById("hTML").style.backgroundColor = "black";
                document.getElementById("rightDoor").style.opacity = 0;
                document.getElementById("leftDoor").style.opacity = 0;
                setTimeout(function(){
                    document.getElementById("freddyScare").style.opacity = "1";
                    freddyJumpscare.play();
                    setTimeout(function(){
                        document.location.href = "/Extras/harderMode/hardGameOver/hardGameOver.html"
                    }, 4000)
                }, 5000)
            }, 13000)
        }, 7000)
        return;
    }

    setTimeout(timer, speed);
}

//Right Door Functions
function rightDoortgl(){
    var rightDoorAudioClose = document.getElementById("rightDoorAudioClose");
    var rightDoorAudioOpen = document.getElementById("rightDoorAudioOpen");
    if(rt.value == "OPEN"){
        rightDoorAudioClose.play();
        document.getElementById("rightDoor").style.height = "445px";
        rt.value = "CLOSE";
        document.getElementById("leftDoor").style.bottom = "3090px";
    } else if(rt.value == "CLOSE"){
        rightDoorAudioOpen.play();
        document.getElementById("rightDoor").style.height = "5px";
        rt.value = "OPEN"
        document.getElementById("leftDoor").style.bottom = "2650px";
    }
}

//Left Door Functions
function leftDoortgl(){
    var leftDoorAudioClose = document.getElementById("leftDoorAudioClose");
    var leftDoorAudioOpen = document.getElementById("leftDoorAudioOpen");
    if(lt.value == "OPEN"){
        leftDoorAudioClose.play();
        document.getElementById("leftDoor").style.height = "445px";
        lt.value = "CLOSE";
    } else if(lt.value == "CLOSE"){
        leftDoorAudioOpen.play();
        document.getElementById("leftDoor").style.height = "5px";
        lt.value = "OPEN";
    }
}

//Right Light Functions
function rightLighttgl(){
    if(rl.value == "OFF"){
        document.getElementById("rightDarkness").style.opacity = "0";
        if(randCHI == 1 || randCHI == 2 || randCHI == 4 || randCHI == 5 || randCHI == 6 || randCHI == 11 || randCHI == 13 || randCHI == 15 || randCHI == 19 || randCHI == 20){
            botAtDoor.play();
        }
        rl.value = "ON";
    } else if(rl.value == "ON"){
        document.getElementById("rightDarkness").style.opacity = "1";
        rl.value = "OFF";
    }
}

//Left Light Functions
function leftLighttgl(){
    if(ll.value == "OFF"){
        document.getElementById("leftDarkness").style.opacity = "0";
        if(randBON == 3 || randBON == 4 || randBON == 5 || randBON == 6 || randBON == 7 || randBON == 11 || randBON == 12 || randBON == 14 || randBON == 16 || randBON == 18){
            botAtDoor.play();
        }
        ll.value = "ON";
    } else if(ll.value == "ON"){
        document.getElementById("leftDarkness").style.opacity = "1";
        ll.value = "OFF";
    }
}

//Freddy Randomizer
let randFRED;

function getRightRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var fms = 14000;
var func = function () {
    randFRED = getRightRandomInt(1, 20);    // Gets random number between 1 and 100
    if(randFRED == 1 || randFRED == 2 || randFRED == 3 || randFRED == 7 || randFRED == 8 || randFRED == 13  || randFRED == 14  || randFRED == 16  || randFRED == 17  || randFRED == 18 ){     //FREDDY Control 
        freddyLaugh.play();
        setTimeout(function(){
            if(rt.value == "CLOSE"){
                freddyLaugh.pause();
                freddyLaugh.currentTime = 0;
                jumpscareDeny.play();
                setTimeout(function(){
                    jumpscareDeny.pause();
                    jumpscareDeny.currentTime = 0;
                }, 3000)
            } else if(rt.value == "OPEN"){
                document.getElementById("freddyScare").style.opacity = "1";
                freddyJumpscare.play();
                setTimeout(function(){
                    document.location.href = "/Extras/harderMode/hardGameOver/hardGameOver.html"
                }, 4000)
            }
        }, 10000)
    }
}
func()
setInterval(func, fms);

//Chica Randomizer
let randCHI;

function getRightRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var cms = 9000;
var func = function () {
    randCHI = getRightRandomInt(1, 20);    // Gets random number between 1 and 100
    if(randCHI == 1 || randCHI == 2 || randCHI == 4 || randCHI == 5 || randCHI == 6 || randCHI == 11 || randCHI == 13 || randCHI == 15 || randCHI == 19 || randCHI == 20){
        document.getElementById("chicaDoor").style.opacity = "1";
        setTimeout(function(){
            if(rt.value == "CLOSE"){
                document.getElementById("chicaDoor").style.opacity = "0";
                jumpscareDeny.play();
                setTimeout(function(){
                    jumpscareDeny.pause();
                    jumpscareDeny.currentTime = 0;
                }, 3000)
            } else if(rt.value == "OPEN"){
                document.getElementById("freddyScare").style.opacity = "1";
                chicaJumpscare.play();
                setTimeout(function(){
                    document.location.href = "/Extras/harderMode/hardGameOver/hardGameOver.html"
                }, 4000)
            }
        }, 5000)
    }
}
func()
setInterval(func, cms);

//Left Hallway Randomizer
let randFOX;

function getRightRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var foms = 20000;
var func = function () {
    randFOX = getRightRandomInt(1, 20);    // Gets random number between 1 and 100
    if(randFOX == 4 || randFOX == 5 || randFOX == 6 || randFOX == 7 || randFOX == 8 || randFOX == 10 || randFOX == 11 || randFOX == 14 || randFOX == 16 || randFOX == 19){     //FOXY Control 
        foxyLaugh.play();
        setTimeout(function(){
            foxyLaugh.pause();
            foxyLaugh.currentTime = 0;
        }, 1000)
        setTimeout(function(){
            foxyRun.play();
        }, 28000)
        setTimeout(function(){
            if(lt.value == "CLOSE"){
                jumpscareDeny.play();
                setTimeout(function(){
                    jumpscareDeny.pause();
                    jumpscareDeny.currentTime = 0;
                }, 3000)
            } else if(lt.value == "OPEN"){
                document.getElementById("freddyScare").style.opacity = "1";
                foxyJumpscare.play();
                setTimeout(function(){
                    document.location.href = "/Extras/harderMode/hardGameOver/hardGameOver.html"
                }, 4000)
            }
        }, 3000)
    }
}

func()
setInterval(func, foms);

//Bonnie Randomizer
let randBON;

function getRightRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var bms = 9000;
var func = function () {
    randBON = getRightRandomInt(1, 20);    // Gets random number between 1 and 100
    if(randBON == 3 || randBON == 4 || randBON == 5 || randBON == 6 || randBON == 7 || randBON == 11 || randBON == 12 || randBON == 14 || randBON == 16 || randBON == 18){
        document.getElementById("bonnieDoor").style.opacity = "1";
        if(ll.value == "ON"){
            botAtDoor.play();
        }
        setTimeout(function(){
            if(lt.value == "CLOSE"){
                document.getElementById("bonnieDoor").style.opacity = "0";
                jumpscareDeny.play();
                setTimeout(function(){
                    jumpscareDeny.pause();
                    jumpscareDeny.currentTime = 0;
                }, 3000)
            } else if(lt.value == "OPEN"){
                document.getElementById("freddyScare").style.opacity = "1";
                bonnieJumpscare.play();
                setTimeout(function(){
                    document.location.href = "/Extras/harderMode/hardGameOver/hardGameOver.html"
                }, 4000)
            }
        }, 5000)
    }
}

func()
setInterval(func, bms);
//STUFF TO DO

//bonnie and chica move when clock hits 1 AM
//freddy moves when clock hits 2 AM
//foxy moves when clock hits 3 AM
//figure out how to implement a battery system to prevent the doors from staying shut all night
//figure out how to make doors and lights react to key presses