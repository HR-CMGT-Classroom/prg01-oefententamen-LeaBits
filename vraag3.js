// antwoord op vraag 3

let breakfastPrepared = false
let totalPeople = 4
let peopleAsleep = 2


loops.forever(function () {
    console.log(`${peopleAsleep} bewoners slapen nog, en er zijn ${totalPeople - peopleAsleep} wakker`)
    // cruesli control 2000
    if (peopleAsleep == 0 && breakfastPrepared == false) {
        pins.A1.digitalWrite(true)
        breakfastPrepared = true
        console.log(`Fijne dag iedereen!`)
    }
})

input.buttonA.onEvent(ButtonEvent.Click, function () {
    peopleAsleep--
    if (peopleAsleep < 0) {
        peopleAsleep = 0
    }
})
