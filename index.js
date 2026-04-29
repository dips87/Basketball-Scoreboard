let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0

// HOME

function increment1home() {
    countHome += 1
    homeScore.textContent = countHome
}

function increment2home() {
    countHome += 2
    homeScore.textContent = countHome
}

function increment3home() {
    countHome += 3
    homeScore.textContent = countHome
}

// GUEST

function increment1guest() {
    countGuest += 1
    guestScore.textContent = countGuest
}

function increment2guest() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function increment3guest() {
    countGuest += 3
    guestScore.textContent = countGuest
}

function reset() {
    countHome = 0
    countGuest = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
}