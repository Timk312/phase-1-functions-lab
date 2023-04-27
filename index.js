// Code your solution in this file!
let hq=42;
function distanceFromHqInBlocks(someValue){
    if(someValue<hq){
        let distance=hq-someValue;
        return distance;
}
    else{
let blocks=someValue-hq;
//let distance=hq-someValue;
return blocks;
        }

}



function distanceFromHqInFeet(someValue){
let feet=distanceFromHqInBlocks(someValue)*264;
return feet;
}

function distanceTravelledInFeet(start, destination){
    if(destination<start){
        let distance=start-destination;
        return distance*264;
    }
    else{
let difference=destination-start;
let feet = difference*264;
return feet;
}
}

function calculatesFarePrice(start, destination){
    let distance=distanceTravelledInFeet(start, destination);
    if (distance<400){
        return 0;
    }
    else if (distance<=2000){
        return ((distance-400)*.02);
    }
    else if (distance<=2500){
        return 25;
    }
    else if (distance>2500){
        return 'cannot travel that far';
    }
}
