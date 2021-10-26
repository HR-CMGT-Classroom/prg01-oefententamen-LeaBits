// antwoord op vraag 2


let status = "online"

loops.forever(function () {
    loops.pause(1000)
    console.log(`De status is ${status}`)
    if (status !== "online") {
        console.log("Het huis van de toekomst is niet online")
        light.setAll(Colors.Red)
    } else {
        light.setAll(Colors.Green)
    }
}) 
