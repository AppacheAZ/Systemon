
let playerAtack
let monPlayer


function initGame() {

    // Selection of the Systemon
    let buttonMon = document.getElementById("button_mon")
    buttonMon.addEventListener("click", function () {
        selectMonPlayer(function(selectedMon) {
            monPlayer = selectedMon;
            console.log(monPlayer);
            
            // Change the name of the Systemons atacks
            let spanMonPlayerAtack1 = document.getElementById("span_atack1")
            nameAtack = getAttackFunction(monPlayer, 'attack1');
            spanMonPlayerAtack1.innerHTML = nameAtack;
            let spanMonPlayerAtack2 = document.getElementById("span_atack2")
            nameAtack = getAttackFunction(monPlayer, 'attack2');
            spanMonPlayerAtack2.innerHTML = nameAtack;
            let spanMonPlayerAtack3 = document.getElementById("span_atack3")
            nameAtack = getAttackFunction(monPlayer, 'attack3');
            spanMonPlayerAtack3.innerHTML = nameAtack;
        });
    });

    

    // Atacks && Defenses buttons and functions
    let button_atack1 = document.getElementById("button_atack1");
    button_atack1.addEventListener("click", function() {atack(monPlayer, "attack1"); })

    let button_atack2 = document.getElementById("button_atack2")
    button_atack2.addEventListener("click", function() {atack(monPlayer, "attack2"); })

    let button_atack3 = document.getElementById("button_atack3")
    button_atack3.addEventListener("click", function() {atack(monPlayer, "attack3"); })
}

function selectMonPlayer(callback) {

    // Selection of the Systemon and change the span with the name of the Systemon
    namePlanet = ""
    let inputMer = document.getElementById("Mer")
    let inputVen = document.getElementById("Ven")
    let inputEar = document.getElementById("Ear")
    let inputMar = document.getElementById("Mar")
    let inputSat = document.getElementById("Sat")
    let inputNep = document.getElementById("Nep")

    let spanMonPlayer = document.getElementById("playerMon")

    if (inputMer.checked) {
        namePlanet = "Mercury"
        spanMonPlayer.innerHTML = "Mercurion"}
    else if (inputVen.checked) {
        namePlanet = "Venus"
        spanMonPlayer.innerHTML = "Venusylph"}
    else if (inputEar.checked) {
        namePlanet = "Earth"
        spanMonPlayer.innerHTML = "Terrathor"}
    else if (inputMar.checked) {
        namePlanet = "Mars"
        spanMonPlayer.innerHTML = "Martidrone"}
    else if (inputSat.checked) {
        namePlanet = "Saturn"
        spanMonPlayer.innerHTML = "Saturchron"}
    else if (inputNep.checked) {
        namePlanet = "Neptune"
        spanMonPlayer.innerHTML = "Nepsus"}
    else {
        alert("Please select a Systemon")
        return
    }
    alert("You have selected a Systemon from " + namePlanet + "!")
    
    selectMonComputer()
    callback (namePlanet)
    return namePlanet
}

function atack (monPlayer, atackType) {
    playerAtack = getAttackFunction(monPlayer, atackType)
    console.log(playerAtack)
    return playerAtack
}

function getAttackFunction(monPlayer, attackType) {
    // return the function that corresponds to the attackType of the monPlayer
    const alienAttacks = {
    Mercury: {
        attack1: blazeBall("nameAtack"),
        attack2: igniteSpeed("nameAtack"),
        attack3: cuttingWind("nameAtack")
      },
    Venus: {
        attack1: hypnoticBuzz("nameAtack"),
        attack2: danceOfFlames("nameAtack"),
        attack3: igniteSpeed("nameAtack")
      },
    Earth: {
        attack1: earthQuake("nameAtack"),
        attack2: thunderStrike("nameAtack"),
        attack3: tsunami("nameAtack")
      },
    Mars: {
        attack1: thunderStrike("nameAtack"),
        attack2: aura("nameAtack"),
        attack3: infernoBurst("nameAtack")
        },
    Saturn: {
        attack1: timeWarp("nameAtack"),
        attack2: gravityShift("nameAtack"),
        attack3: cyclone("nameAtack")
        },
    Neptune: {
        attack1: tsunami("nameAtack"),
        attack2: hydroVortex("nameAtack"),
        attack3: callOfTheSea("nameAtack")
        }

    };

    if (alienAttacks[monPlayer][attackType]) {
        alert("You have selected " + attackType + "!")
        console.log("You have selected " + attackType + "!");
        atackname = alienAttacks[monPlayer][attackType]
        return atackname;
      } else {
        console.log("Función de ataque no encontrada");
        return function () {
          // Function for default erroor management
        };
      }
    }

function selectMonComputer() {
    let mons = ["Mercurion", "Venusylph", "Terrathor", "Martidrone", "Saturchron", "Nepsus"]
    let spanMonComputer = document.getElementById("comptrMon")
    let monComputer = mons[random(0, 6)]
    spanMonComputer.innerHTML = monComputer
    alert("The computer has selected a " + monComputer + "!")
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


window.addEventListener("load", initGame)