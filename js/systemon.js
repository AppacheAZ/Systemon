let playerAtack
let monPlayer

// Atacks
function blazeBall() {
    return "Blaze Ball!"
}
function igniteSpeed() {
    return "Ignite Speed!"
}
function cuttingWind() {
    return "Cutting Wind!"
}
function hypnoticBuzz() {
    return "Hypnotic Buzz!"
}
function danceOfFlames() {
    return "Dance of Flames!"
}
function earthQuake() {
    return "Earthquake!"
}
function thunderStrike() {
    return "Thunder Strike!"
}
function tsunami() {
    return "Tsunami!"
}
function aura() {
    return "Aura!"
}
function infernoBurst() {
    return "Inferno Burst!"
}
function timeWarp() {
    return "Time Warp!"
}
function gravityShift() {
    return "Gravity Shift!"
}
function cyclone() {
    return "Cyclone!"
}
function hydroVortex() {
    return "Hydro Vortex!"
}
function callOfTheSea() {
    return "Call of the Sea!"
}

function initGame() {

    // Selection of the Systemon
    let buttonMon = document.getElementById("button_mon")
    buttonMon.addEventListener("click", function () {monPlayer = selectMonPlayer();})
    console.log(monPlayer)

    let spanMonPlayerAtack1 = document.getElementById("span_atack1")
    nameAtack = getAttackFunction(monPlayer, 'attack1');
    spanMonPlayerAtack1.innerHTML = nameAtack

    // Atacks && Defenses
    let buttonAttack1 = document.getElementById("button_attack1");
    buttonAttack1.addEventListener("click", function() {atack(monPlayer, "attack1"); })

    let buttonAttack2 = document.getElementById("button_atack2")
    buttonAttack2.addEventListener("click", function() {atack(monPlayer, "attack2"); })

    let buttonAttack3 = document.getElementById("button_atack3")
    buttonAttack3.addEventListener("click", function() {atack(monPlayer, "attack3"); })
}

function selectMonPlayer() {
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
    return (namePlanet)
}

function atack (monPlayer, atackType) {
    playerAtack = getAttackFunction(monPlayer, atackType)
    console.log(playerAtack)
    return playerAtack
}

function getAttackFunction(monPlayer, attackType) {
    const alienAttacks = {
    Mercury: {
        attack1: blazeBall,
        attack2: igniteSpeed,
        attack3: cuttingWind
      },
    Venus: {
        attack1: hypnoticBuzz,
        attack2: danceOfFlames,
        attack3: igniteSpeed
      },
    Earth: {
        attack1: earthQuake,
        attack2: thunderStrike,
        attack3: tsunami
      },
    Mars: {
        attack1: thunderStrike,
        attack2: aura,
        attack3: infernoBurst
        },
    Saturn: {
        attack1: timeWarp,
        attack2: gravityShift,
        attack3: cyclone
        },
    Neptune: {
        attack1: tsunami,
        attack2: hydroVortex,
        attack3: callOfTheSea
        }

    };

    if (alienAttacks[monPlayer][attackType]) {
        alert("You have selected " + attackType + "!")
        console.log("You have selected " + attackType + "!");
        return alienAttacks[monPlayer][attackType];
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