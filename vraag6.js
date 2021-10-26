// antwoord op vraag 6

let currentTemperature = 18
let currentBrightness = 50
let currentVolume = 40

input.buttonA.onEvent(ButtonEvent.Click, function () {
    mood(currentTemperature, currentBrightness, currentVolume, "'s morgens")
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    mood(1, 2, 3, "avond")
})

input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    mood(4, 5, 6, "middag")
})

function mood(
    temp: number,
    bright: number,
    sound: number,
    ambiance: string
) {
    currentTemperature = temp
    currentBrightness = bright
    currentVolume = sound
    console.log(ambiance)
}
