const harryPotter = {
    firstName: "Harry",
    lastName: "Potter",
    hairColor: "Black",
}

const hermioneGranger = {
    firstName: "Hermione",
    lastName: "Granger",
    hairColor: "Brown",
}

const ronWeasly = {
    firstName: "Ron",
    lastName: "Weasley",
    hairColor: "Red"
}


/* All in one function */
document.getElementById("mainBtn").onclick = () => {
    document.getElementById("harry").style.color = "black";
    document.getElementById("harry").innerHTML = harryPotter.firstName + " " + harryPotter.lastName;
    document.getElementById("hermione").style.color = "brown";
    document.getElementById("hermione").innerHTML = hermioneGranger.firstName + " " + hermioneGranger.lastName;
    document.getElementById("ron").style.color = "red";
    document.getElementById("ron").innerHTML = ronWeasly.firstName + " " + ronWeasly.lastName;
}

/* one by one  */
document.getElementById("btnBlack").onclick = () => {
    document.getElementById("harry").style.color = "black";
    document.getElementById("harry").innerHTML = harryPotter.firstName + " " + harryPotter.lastName;
}; 

document.getElementById("btnBrown").onclick = () => {
    document.getElementById("hermione").style.color = "brown";
    document.getElementById("hermione").innerHTML = hermioneGranger.firstName + " " + hermioneGranger.lastName;
}; 

document.getElementById("btnRed").onclick = () => {
    document.getElementById("ron").style.color = "red";
    document.getElementById("ron").innerHTML = ronWeasly.firstName + " " + ronWeasly.lastName;
}; 

/* Reset all characters */
document.getElementById("reset").onclick = () => {
    document.getElementById("harry").style.color = "darkorange";
    document.getElementById("harry").innerHTML = harryPotter.firstName;
    document.getElementById("hermione").style.color = "darkorange";
    document.getElementById("hermione").innerHTML = hermioneGranger.firstName;
    document.getElementById("ron").style.color = "darkorange";
    document.getElementById("ron").innerHTML = ronWeasly.firstName;
    
}







