//Program to search for a particular character in a string

var str = "Tom and Jerry";

function searchCharacter(characterToFind){
var position = str.search(characterToFind);
document.getElementById("string").innerHTML = str;
document.getElementById("charToFind").innerHTML = characterToFind;
document.getElementById("char").innerHTML = position;
console.log(position);
}
searchCharacter("n");


//Program to convert minutes to seconds

function convertMinutestoSeconds(minutes) 
{
    const seconds = Math.floor(minutes * 60);
    document.getElementById("minute").innerHTML= minutes;
    document.getElementById("seconds").innerHTML = seconds;
    console.log(seconds);
}
convertMinutestoSeconds(10);

// Program to search for a element in a array of strings
let fruits = ["Apple","Mango","Strawberry","Grapes","Guva","Banana"];
document.getElementById("fruits").innerHTML = fruits;
function searchElement(element){
    for (let i =0; i< fruits.length;i++){
        document.getElementById("findFruit").innerHTML=element;
        if(fruits[i].toLowerCase() == element.toLowerCase()){
            let position = fruits.findIndex(item =>  
                element.toLowerCase() === item.toLowerCase());
            document.getElementById("position").innerHTML = position+1;

            console.log(position);
        }
    }
}
searchElement("Grapes");

// Program to display only elements containing 'a' in them from a array

const vehicles = ["car","bike","aeroplane","boat","auto rickshaw","rocket","air"];
let result = [];
document.getElementById("vehicles").innerHTML = vehicles;
function onlyContainElement(character){
    document.getElementById("start").innerHTML = character;
    for(let i=0; i<vehicles.length;i++){
        if(vehicles[i].toLowerCase().includes(character)){
            result.push(vehicles[i]);
            console.log(vehicles[i]);
        }
    }
    document.getElementById("finded").innerHTML = result;
}
onlyContainElement("a");


// Print an array in reverse order
const original = ["Apple","Mango","Strawberry","Grapes","Guva","Banana"];
document.getElementById("original").innerHTML = original;
original.reverse();
console.log(original);
document.getElementById("reverse").innerHTML = original;




