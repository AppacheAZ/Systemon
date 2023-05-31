function initGame() {
    let buttonMon = document.getElementById("button_mon")
    buttonMon.addEventListener("click", selectMonPlayer)
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
}

function selectMonComputer() {
    let mons = ["Mercurion", "Venusylph", "Terrathor", "Martidrone", "Saturchron", "Nepsus"]
    let spanMonComputer = document.getElementById("comptrMon")
    let monComputer = mons[random(0, 6)]
    spanMonComputer.innerHTML = monComputer
    alert("The computer has selected a " + monComputer + "!")
    battle()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.addEventListener("load", initGame)