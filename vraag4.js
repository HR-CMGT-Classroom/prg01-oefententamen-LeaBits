// antwoord op vraag 4

let maxSunblock = 1000
// let sunBlocks = [pins.A1, pins.A2]

for (let i = 0; i < maxSunblock; i = i + 100) {
    pins.A1.analogWrite(i)
    pins.A2.analogWrite(i)

    // for(let s = 0; s < sunBlocks.length; s++){
    //     sunBlocks[s].analogWrite(i)
    // }
}
